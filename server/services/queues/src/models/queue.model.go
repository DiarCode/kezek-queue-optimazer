package models

import (
	"context"
	"time"

	"github.com/DiarCode/kezek-queue-optimazer/queues/src/database"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type Queue struct {
	Id         primitive.ObjectID `json:"id" bson:"_id"`
	EventId    int64              `json:"eventId" bson:"eventId"`
	QueueItems []QueueItem        `json:"queueItems" bson:"queueItems"`
}

type QueueItem struct {
	Id        primitive.ObjectID `json:"id" bson:"_id"`
	UserId    int64              `json:"userId" bson:"userId"`
	Position  int32              `json:"position" bson:"position"`
	IsCurrent bool               `json:"isCurrent" bson:"isCurrent"`
	EnteredAt time.Time          `json:"enteredAt" bson:"enteredAt"`
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
