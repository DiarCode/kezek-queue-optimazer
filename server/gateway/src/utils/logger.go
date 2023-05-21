package utils

import (
	"log"

	"go.uber.org/zap"
)

var Logger *zap.Logger

func InitLogger() {
	Logger, err := zap.NewProduction()
	
	if err != nil {
		log.Fatalf("Failed to initialize logger: %v", err)
	}

	defer Logger.Sync()
}
