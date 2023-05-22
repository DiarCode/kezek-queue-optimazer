package routers

import (
	"github.com/DiarCode/kezek-queue-optimazer/gateway/src/controllers"
	"github.com/DiarCode/kezek-queue-optimazer/gateway/src/utils"
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
	api.POST("/auth/login", Controllers.Auth.Login)
	api.POST("/auth/signup", Controllers.Auth.Signup)

	api.GET("/", func(c *gin.Context) {
		utils.LoggerInfo("Entered into home page")
		utils.SendJson(c, 200, "Hello World")
	})

	return r
}
