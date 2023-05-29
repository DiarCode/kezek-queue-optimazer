package services

import (
	"context"

	authpb "github.com/DiarCode/kezek-queue-optimazer/gateway/src/gen/auth"
	"github.com/DiarCode/kezek-queue-optimazer/gateway/src/services"
)

func Login(dto *authpb.LoginRequest) (*authpb.AuthResponse, error) {
	resp, err := services.Clients.Auth.Login(context.Background(), dto)
	return resp, err
}

func Signup(dto *authpb.SignupRequest) (*authpb.AuthResponse, error) {
	resp, err := services.Clients.Auth.Signup(context.Background(), dto)
	return resp, err
}
