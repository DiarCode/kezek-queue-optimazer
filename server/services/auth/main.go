package main

import (
	"fmt"
	"net"

	"github.com/DiarCode/kezek-queue-optimazer/auth/src/config"
	"github.com/DiarCode/kezek-queue-optimazer/auth/src/database"
	authpb "github.com/DiarCode/kezek-queue-optimazer/auth/src/gen/auth"
	"github.com/DiarCode/kezek-queue-optimazer/auth/src/services"
	"github.com/DiarCode/kezek-queue-optimazer/auth/src/utils"

	"google.golang.org/grpc"
)

func main() {
	utils.InitLogger()

	// config.Config = &config.AppConfig{
	// 	APP_PORT:    50051,
	// 	JWT_KEY:     os.Getenv("JWT_KEY"),
	// 	DB_USER:     os.Getenv("DB_USER"),
	// 	DB_PASSWORD: os.Getenv("DB_PASSWORD"),
	// 	DB_NAME:     os.Getenv("DB_NAME"),
	// 	DB_PORT:     os.Getenv("DB_PORT"),
	// }
	config.Config = &config.AppConfig{
		APP_PORT:    50051,
		JWT_KEY:     "SSH256KEY",
		DB_USER:     "postgres",
		DB_PASSWORD: "postgres",
		DB_NAME:     "kezek_auth",
		DB_PORT:     "5432",
		DB_HOST:     "localhost",
	}

	database.ConnectDB()

	server := grpc.NewServer()
	authpb.RegisterAuthServiceServer(server, &services.AuthService{})

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
