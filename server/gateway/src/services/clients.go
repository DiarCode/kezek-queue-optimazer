package services

import (
	"fmt"

	authpb "github.com/DiarCode/kezek-queue-optimazer/gateway/src/gen/auth"
	eventpb "github.com/DiarCode/kezek-queue-optimazer/gateway/src/gen/event"
	"github.com/DiarCode/kezek-queue-optimazer/gateway/src/utils"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

type ClientsType struct {
	Auth   authpb.AuthServiceClient
	Events eventpb.EventServiceClient
}

var Clients *ClientsType

const (
	authPort  = 50051
	eventPort = 50052
	queuePort = 50053
)

func InitServiceClients() *ClientsType {
	authClient := getAuthClient()
	eventClient := getEventClient()

	clients := &ClientsType{
		Auth:   authClient,
		Events: eventClient,
	}

	return clients
}

func getEventClient() eventpb.EventServiceClient {
	uri := fmt.Sprintf("localhost:%v", eventPort)
	conn, err := grpc.Dial(uri, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		utils.LoggerFatalf("Failed to connect to Event client: %v", err)
	}

	return eventpb.NewEventServiceClient(conn)
}

func getAuthClient() authpb.AuthServiceClient {
	uri := fmt.Sprintf("localhost:%v", authPort)
	conn, err := grpc.Dial(uri, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		utils.LoggerFatalf("Failed to connect to Auth client: %v", err)
	}

	return authpb.NewAuthServiceClient(conn)
}
