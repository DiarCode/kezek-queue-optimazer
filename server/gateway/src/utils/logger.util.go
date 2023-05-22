package utils

import (
	"fmt"
	"log"

	"go.uber.org/zap"
)

var logger *zap.Logger

const (
	context = "[Gateway]"
)

func InitLogger() {
	logger, err := zap.NewProduction()

	if err != nil {
		log.Fatalf("Failed to initialize logger: %v", err)
	}

	defer logger.Sync()
}

func LoggerInfo(msg string) {
	logger.Info(fmt.Sprintf("%v %v", context, msg))
}

func LoggerInfof(msg string, args ...interface{}) {
	logger.Sugar().Infof(fmt.Sprintf("%v %v", context, msg), args)
}

func LoggerFatalf(msg string, args ...interface{}) {
	logger.Sugar().Fatalf(fmt.Sprintf("%v %v", context, msg), args)
}

func LoggerFatal(msg string) {
	logger.Fatal(fmt.Sprintf("%v %v", context, msg))
}
