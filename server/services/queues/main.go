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
	"github.com/streadway/amqp"

	"google.golang.org/grpc"
)

func main() {
	utils.InitLogger()

	config.Config = &config.AppConfigType{
		APP_PORT: 50052,

		DB_NAME: os.Getenv("DB_USER"),
		DB_URI:  os.Getenv("DB_URI"),
	}

	// RabbitMQ
	conn, err := amqp.Dial("amqp://guest:guest@localhost:5672/")
	if err != nil {
		utils.LoggerFatalf("Failed to connect to RabbitMQ: %v", err)
	}
	defer conn.Close()

	channel, err := conn.Channel()
	if err != nil {
		utils.LoggerFatalf("Failed to open a channel: %v", err)
	}
	defer channel.Close()

	config.RabbitMQConfig = &config.RabbitMQConfigType{
		Channel: channel,
	}

	// Database
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
