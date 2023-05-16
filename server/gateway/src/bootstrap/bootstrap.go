package bootstrap

import (
	"fmt"
	"log"

	"github.com/DiarCode/kezek-queue-optimazer/gateway/src/routers"
	"github.com/DiarCode/kezek-queue-optimazer/gateway/src/utils"
)

const (
	port = 8080
)

func InitApp() {
	utils.InitLogger()

	router := routers.InitRouter()

	err := router.Run(fmt.Sprintf(":%v", port))
	if err != nil {
		log.Fatal(err)
	}
}
