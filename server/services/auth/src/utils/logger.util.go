package utils

import (
	"fmt"
	"log"

	"go.uber.org/zap"
)

var Logger *zap.Logger

func InitLogger() {
	var err error;
	Logger, err = zap.NewProduction()

	if err != nil {
		log.Fatalf("Failed to initialize logger: %v", err)
	}

	defer Logger.Sync()
}

func LoggerInfo(msg string) {
	Logger.Info(fmt.Sprintf("[User] %v", msg))
}

func LoggerInfof(msg string, args ...interface{}) {
	Logger.Sugar().Infof(fmt.Sprintf("[User] %v", msg), args)
}

func LoggerFatalf(msg string, args ...interface{}) {
	Logger.Sugar().Fatalf(fmt.Sprintf("[User] %v", msg), args)
}

func LoggerFatal(msg string) {
	Logger.Fatal(fmt.Sprintf("[User] %v", msg))
}
