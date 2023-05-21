package routers

import "github.com/gin-gonic/gin"

func NewRouter() *gin.Engine {
	r := gin.New()
	r.Use(gin.Logger())
	r.Use(gin.Recovery())

	api := r.Group("/api/v1")

	//TODO: Fill handlers
	api.GET("/login", func(c *gin.Context) {})
	api.GET("/signup", func(c *gin.Context) {})

	return r
}
