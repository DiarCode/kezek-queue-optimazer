package main

import (
	"fmt"

	"github.com/DiarCode/kezek-queue-optimazer/gateway/src/routers"
	"github.com/DiarCode/kezek-queue-optimazer/gateway/src/services"
	"github.com/DiarCode/kezek-queue-optimazer/gateway/src/utils"
)

const (
	port = 8080
)

func main() {
	utils.InitLogger()

	services.Clients = services.InitServiceClients()

	router := routers.NewRouter()

	utils.LoggerInfof("Running http server listening on port %v", port)
	err := router.Run(fmt.Sprintf(":%v", port))
	if err != nil {
		utils.LoggerFatalf("Failed to run server: %v", err)
	}

}
