package main

import (
	"fmt"
	"net"
	"os"

	"github.com/DiarCode/kezek-queue-optimazer/events/src/config"
	eventpb "github.com/DiarCode/kezek-queue-optimazer/events/src/gen/event"
	"github.com/DiarCode/kezek-queue-optimazer/events/src/services"
	"github.com/DiarCode/kezek-queue-optimazer/events/src/utils"

	"google.golang.org/grpc"
)

func main() {
	utils.InitLogger()

	config.Config = &config.AppConfig{
		APP_PORT: 50052,

		DB_USER:     os.Getenv("DB_USER"),
		DB_PASSWORD: os.Getenv("DB_PASSWORD"),
		DB_NAME:     os.Getenv("DB_NAME"),
		DB_PORT:     os.Getenv("DB_PORT"),
	}

	server := grpc.NewServer()
	eventpb.RegisterEventServiceServer(server, &services.EventService{})

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
