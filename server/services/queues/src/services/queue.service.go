package services

import (
	"context"

	queuepb "github.com/DiarCode/kezek-queue-optimazer/queues/src/gen/queue"
)

type QueueService struct{}

func (*QueueService) CreateQueue(ctx context.Context, req *queuepb.CreateQueueRequest) (*queuepb.Queue, error) {
	return nil, nil
}
