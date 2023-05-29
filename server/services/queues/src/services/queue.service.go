package services

import (
	"context"
	"encoding/binary"
	"encoding/json"

	"github.com/DiarCode/kezek-queue-optimazer/queues/src/config"
	queuepb "github.com/DiarCode/kezek-queue-optimazer/queues/src/gen/queue"
	"github.com/DiarCode/kezek-queue-optimazer/queues/src/models"
	"github.com/DiarCode/kezek-queue-optimazer/queues/src/utils"
	"github.com/pkg/errors"
	"github.com/streadway/amqp"
)

type QueueService struct{}

func (*QueueService) CreateQueue(ctx context.Context, req *queuepb.CreateQueueRequest) (*queuepb.Queue, error) {
	candidate := &models.Queue{
		EventId: req.EventId,
	}

	err := models.CreateQueue(candidate)
	if err != nil {
		return nil, err
	}

	queue := &queuepb.Queue{
		Id:         candidate.Id.String(),
		EventId:    candidate.EventId,
		QueueItems: []*queuepb.QueueItem{},
	}

	return queue, nil

}

func (*QueueService) GetQueueById(ctx context.Context, req *queuepb.GetQueueByIdRequest) (*queuepb.Queue, error) {
	var candidate *models.Queue
	err := models.GetQueueById(req.Id, candidate)

	if err != nil {
		return nil, err
	}

	queue := &queuepb.Queue{
		Id:         candidate.Id.String(),
		EventId:    candidate.EventId,
		QueueItems: candidate.QueueItems,
	}

	return queue, nil
}

func (*QueueService) InsertCandidateToQueue(ctx context.Context, req *queuepb.InsertCandidateToQueueRequest) (*queuepb.InsertCandidateToQueueResponse, error) {
	var queue *models.Queue

	err := models.GetQueueById(req.Id, queue)
	if err != nil {
		return nil, err
	}

	rabbitQueuBody := req.UserId
	byteBody, _ := json.Marshal(rabbitQueuBody)

	err = utils.PublishToQueue(config.RabbitMQConfig.Channel, queue.Id.String(), byteBody, amqp.Table{})
	if err != nil {
		utils.LoggerErrorf("Failed to publish items to RabbitMQ: %v", err)
		return nil, err
	}

	return proccessItemsInRabbitQueue(queue.Id.String(), req.UserId)

}

func proccessItemsInRabbitQueue(queueId string, userId int64) (*queuepb.InsertCandidateToQueueResponse, error) {
	// Consume items from the queue
	msgs, err := utils.ConsumeFromQueue(config.RabbitMQConfig.Channel, queueId)
	if err != nil {
		utils.LoggerErrorf("Failed to consume items from the queue: %v", err)
		return nil, err
	}

	// Process each item as it arrives
	for msg := range msgs {
		byteBody := msg.Body
		uintBody := binary.BigEndian.Uint64(byteBody)
		var itemUserId int64 = int64(uintBody)

		if itemUserId == userId {
			return models.InsertQueueItem(queueId, userId)
		}

		err = msg.Ack(false)
		if err != nil {
			utils.LoggerInfof("Failed to acknowledge the message: %v", err)
		}
	}

	err = errors.New("Failed to insert queueItem")
	return nil, err
}
