package main

import (
	"fmt"
	"log"

	"github.com/DiarCode/kezek-queue-optimazer/gateway/src/routers"
	"github.com/DiarCode/kezek-queue-optimazer/gateway/src/utils"
)

const (
	port = 8080
)

func main() {
	utils.InitLogger()

	router := routers.NewRouter()

	utils.Logger.Sugar().Infof("Running http server listening on %v", port)
	err := router.Run(fmt.Sprintf(":%v", port))
	if err != nil {
		log.Fatal(err)
	}

}
