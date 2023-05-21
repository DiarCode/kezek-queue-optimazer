package database

import (
	"context"

	"github.com/DiarCode/kezek-queue-optimazer/queues/src/config"
	"github.com/DiarCode/kezek-queue-optimazer/queues/src/utils"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const (
	QueueCollection = "queue"
)

type MongoCollections struct {
	Queue *mongo.Collection
}

var Collections = &MongoCollections{}

func ConnectDB() *mongo.Client {
	uri := config.Config.DB_URI
	if uri == "" {
		utils.LoggerFatal("Failed to connect to DB: URI not provided")
	}

	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI(uri))
	if err != nil {
		utils.LoggerFatal("Failed to connect to DB client")
	}

	Collections.Queue = client.Database(config.Config.DB_NAME).Collection(QueueCollection)

	return client
}
