package main

import (
	"context"
	"fmt"
	"net"
	"os"

	"github.com/DiarCode/kezek-queue-optimazer/queues/src/config"
	"github.com/DiarCode/kezek-queue-optimazer/queues/src/database"
	queuepb "github.com/DiarCode/kezek-queue-optimazer/queues/src/gen/queue"
	"github.com/DiarCode/kezek-queue-optimazer/queues/src/services"
	"github.com/DiarCode/kezek-queue-optimazer/queues/src/utils"

	"google.golang.org/grpc"
)

func main() {
	utils.InitLogger()

	config.Config = &config.AppConfig{
		APP_PORT: 50052,

		DB_NAME: os.Getenv("DB_USER"),
		DB_URI:  os.Getenv("DB_URI"),
	}

	client := database.ConnectDB()
	defer func() {
		if err := client.Disconnect(context.Background()); err != nil {
			utils.LoggerFatalf("Disconected from DB client: %v", err)
		}
	}()

	server := grpc.NewServer()
	queuepb.RegisterQueueServiceServer(server, &services.QueueService{})

	lis, err := net.Listen("tcp", fmt.Sprintf(":%v", config.Config.APP_PORT))
	if err != nil {
		utils.LoggerFatalf("Failed to listen: %v", err)
	}

	utils.LoggerInfof("Server is running on port %v", config.Config.APP_PORT)

	err = server.Serve(lis)
	if err != nil {
		utils.LoggerFatalf("Failed to serve: %v", err)
	}
}
