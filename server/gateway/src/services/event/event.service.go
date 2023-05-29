package services

import (
	eventpb "github.com/DiarCode/kezek-queue-optimazer/gateway/src/gen/event"
	"github.com/DiarCode/kezek-queue-optimazer/gateway/src/utils"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func GetEventClient() eventpb.EventServiceClient {
	conn, err := grpc.Dial("localhost:50051", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		utils.LoggerFatalf("Failed to connect to Event client: %v", err)
	}

	return eventpb.NewEventServiceClient(conn)
}
