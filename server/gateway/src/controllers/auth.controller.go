package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type AuthControllers struct{}

func (*AuthControllers) Login(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "pong",
	})
}

func (*AuthControllers) Signup(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "pong",
	})
}
