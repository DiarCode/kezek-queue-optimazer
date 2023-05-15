package utils

import "go.uber.org/zap"

var Logger *zap.Logger

func NewLogger() {
	Logger, _ = zap.NewProduction()
}
