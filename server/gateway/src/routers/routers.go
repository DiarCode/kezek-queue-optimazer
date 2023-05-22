package routers

import (
	"github.com/DiarCode/kezek-queue-optimazer/gateway/src/controllers"
	"github.com/gin-gonic/gin"
)

type RouterControllersType struct {
	Events *controllers.EventControllers
	Queues *controllers.QueuesControllers
	Auth   *controllers.AuthControllers
}

var Controllers *RouterControllersType

func NewRouter() *gin.Engine {
	Controllers := &RouterControllersType{
		Events: &controllers.EventControllers{},
		Queues: &controllers.QueuesControllers{},
		Auth:   &controllers.AuthControllers{},
	}

	r := gin.New()
	r.Use(gin.Logger())
	r.Use(gin.Recovery())

	api := r.Group("/api/v1")

	// Auth
	api.POST("/login", Controllers.Auth.Login)
	api.POST("/signup", Controllers.Auth.Signup)

	return r
}
