package services

import (
	"fmt"
	"log"
)

type UserService struct {
	log.Logger
}

func (*UserService) CreateUser() {
	fmt.Println("Hello World")
}
