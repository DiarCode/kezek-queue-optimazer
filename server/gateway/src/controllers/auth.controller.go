package controllers

import (
	"net/http"

	authpb "github.com/DiarCode/kezek-queue-optimazer/gateway/src/gen/auth"
	models "github.com/DiarCode/kezek-queue-optimazer/gateway/src/models/auth"
	services "github.com/DiarCode/kezek-queue-optimazer/gateway/src/services/auth"
	"github.com/DiarCode/kezek-queue-optimazer/gateway/src/utils"
	"github.com/gin-gonic/gin"
)

type AuthControllers struct {
}

func (*AuthControllers) Login(c *gin.Context) {
	var input models.LoginJson
	err := c.ShouldBindJSON(&input)
	if err != nil {
		utils.SendJsonError(c, http.StatusInternalServerError, "Failed to parse json", err)
	}

	resp, err := services.Login(&authpb.LoginRequest{Email: input.Email, Password: input.Password})
	if err != nil {
		utils.SendJsonError(c, http.StatusInternalServerError, "Failed to login", err)
	}

	utils.SendJson(c, http.StatusOK, resp)
}

func (*AuthControllers) Signup(c *gin.Context) {
	var input models.SignupJson
	err := c.ShouldBindJSON(&input)
	if err != nil {
		utils.SendJsonError(c, http.StatusInternalServerError, "Failed to parse json", err)
	}

	resp, err := services.Signup(&authpb.SignupRequest{
		Email:     input.Email,
		Password:  input.Password,
		FirstName: input.FirstName,
		LastName:  input.LastName,
	})
	if err != nil {
		utils.SendJsonError(c, http.StatusInternalServerError, "Failed to signup", err)
	}

	utils.SendJson(c, http.StatusOK, resp)
}
