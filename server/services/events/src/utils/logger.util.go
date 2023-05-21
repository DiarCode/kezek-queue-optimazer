package utils

import (
	"fmt"
	"log"

	"go.uber.org/zap"
)

var Logger *zap.Logger

const (
	context = "[Event]"
)

func InitLogger() {
	Logger, err := zap.NewProduction()

	if err != nil {
		log.Fatalf("Failed to initialize logger: %v", err)
	}

	defer Logger.Sync()
}

func LoggerInfo(msg string) {
	Logger.Info(fmt.Sprintf("%v %v", context, msg))
}

func LoggerInfof(msg string, args ...interface{}) {
	Logger.Sugar().Infof(fmt.Sprintf("%v %v", context, msg), args)
}

func LoggerFatalf(msg string, args ...interface{}) {
	Logger.Sugar().Fatalf(fmt.Sprintf("%v %v", context, msg), args)
}

func LoggerFatal(msg string) {
	Logger.Fatal(fmt.Sprintf("%v %v", context, msg))
}
