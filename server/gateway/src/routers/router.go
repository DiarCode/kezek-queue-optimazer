package routers

import (
	"github.com/gin-gonic/gin"
)

func InitRouter() *gin.Engine {
	app := gin.New()
	r := app.Group("/api/v1")

	r.Use(gin.Logger())
	r.Use(gin.Recovery())

	//Routers
	// r.GET("/health", "handler")

	return app
}
