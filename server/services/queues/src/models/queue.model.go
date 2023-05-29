package models

import (
	"context"
	"time"

	"github.com/DiarCode/kezek-queue-optimazer/queues/src/database"
	queuepb "github.com/DiarCode/kezek-queue-optimazer/queues/src/gen/queue"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"google.golang.org/protobuf/types/known/timestamppb"
)

const (
	DEFAULT_WAIT_TIME_MINUTES = 15
)

type Queue struct {
	Id         primitive.ObjectID   `json:"id" bson:"_id"`
	EventId    int64                `json:"eventId" bson:"eventId"`
	QueueItems []*queuepb.QueueItem `json:"queueItems" bson:"queueItems"`
}

type QueueItem struct {
	Id        primitive.ObjectID     `json:"id" bson:"_id"`
	UserId    int64                  `json:"userId" bson:"userId"`
	Position  int32                  `json:"position" bson:"position"`
	IsCurrent bool                   `json:"isCurrent" bson:"isCurrent"`
	EnteredAt *timestamppb.Timestamp `json:"enteredAt" bson:"enteredAt"`
}

func GetQueueById(id string, queue *Queue) error {
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	coll := database.Collections.Queue
	filter := bson.D{{Key: "_id", Value: objectId}}

	err = coll.FindOne(context.Background(), filter).Decode(&queue)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return err
		}
		return err
	}

	return nil
}

func CreateQueue(queue *Queue) error {
	coll := database.Collections.Queue
	_, err := coll.InsertOne(context.Background(), &queue)

	if err != nil {
		return err
	}

	return nil
}

func InsertQueueItem(queueId string, userId int64) (*queuepb.InsertCandidateToQueueResponse, error) {
	objectId, err := primitive.ObjectIDFromHex(queueId)
	if err != nil {
		return nil, err
	}

	coll := database.Collections.Queue
	filter := bson.D{{Key: "_id", Value: objectId}}

	var queue *Queue

	err = coll.FindOne(context.Background(), filter).Decode(&queue)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, err
		}
		return nil, err
	}

	if len(queue.QueueItems) == 0 {
		firstQueueItem := &queuepb.QueueItem{
			UserId:    userId,
			Position:  1,
			IsCurrent: true,
			EnteredAt: timestamppb.Now(),
		}
		queue.QueueItems = append(queue.QueueItems, firstQueueItem)
		coll.UpdateByID(context.Background(), queue.Id, queue)
		waitingTimePb := getEstimatedWaitingTime(1)

		return &queuepb.InsertCandidateToQueueResponse{
			Position:    firstQueueItem.Position,
			WaitingTime: waitingTimePb,
		}, nil
	}

	var currentQueue *QueueItem
	filter = bson.D{{Key: "isCurrent", Value: true}}
	err = coll.FindOne(context.Background(), filter).Decode(&currentQueue)
	if err != nil {
		return nil, err
	}

	lastPosElement, err := findLastPositionElement(queueId)
	if err != nil {
		return nil, err
	}

	currentPos := currentQueue.Position
	lastPos := lastPosElement.Position
	peopleBetweenCurrentAndLast := lastPos - currentPos
	waitingTimePb := getEstimatedWaitingTime(peopleBetweenCurrentAndLast)

	queueItem := &queuepb.QueueItem{
		UserId:    userId,
		Position:  lastPos + 1,
		IsCurrent: false,
		EnteredAt: timestamppb.Now(),
	}

	queue.QueueItems = append(queue.QueueItems, queueItem)
	_, err = coll.UpdateByID(context.Background(), queue.Id, queue)
	if err != nil {
		return nil, err
	}

	return &queuepb.InsertCandidateToQueueResponse{
		Position:    queueItem.Position,
		WaitingTime: waitingTimePb,
	}, nil
}

func findLastPositionElement(queueId string) (*QueueItem, error) {
	objectId, err := primitive.ObjectIDFromHex(queueId)
	if err != nil {
		return nil, err
	}

	var result *QueueItem
	coll := database.Collections.Queue

	filter := bson.D{{Key: "_id", Value: objectId}}
	options := &options.FindOneOptions{
		Sort: bson.D{{Key: "position", Value: -1}},
	}

	err = coll.FindOne(context.Background(), filter, options).Decode(&result)
	if err != nil {
		return nil, err
	}

	return result, nil
}

func getEstimatedWaitingTime(peopleBetween int32) *timestamppb.Timestamp {
	waitingMinutes := time.Duration(peopleBetween) * DEFAULT_WAIT_TIME_MINUTES

	currentTime := time.Now()
	waitingTime := currentTime.Add(waitingMinutes * time.Minute)
	waitingTimePb := timestamppb.New(waitingTime)

	return waitingTimePb
}

func InsertCandidateToQueue() {}
