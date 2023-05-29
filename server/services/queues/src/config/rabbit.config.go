package config

import "github.com/streadway/amqp"

type RabbitMQConfigType struct {
	Channel *amqp.Channel
}

var RabbitMQConfig *RabbitMQConfigType



