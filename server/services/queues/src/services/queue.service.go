package services

import (
	"context"

	queuepb "github.com/DiarCode/kezek-queue-optimazer/queues/src/gen/queue"
	"github.com/DiarCode/kezek-queue-optimazer/queues/src/models"
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

func (*QueueService) InsertCandidateToQueue(ctx context.Context, req *queuepb.InsertCandidateToQueueRequest) (*queuepb.QueueItem, error) {
	
	return nil, nil
}
