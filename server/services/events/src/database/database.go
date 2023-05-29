package database

import (
	"fmt"

	"github.com/DiarCode/kezek-queue-optimazer/events/src/config"
	eventpb "github.com/DiarCode/kezek-queue-optimazer/events/src/gen/event"
	"github.com/DiarCode/kezek-queue-optimazer/events/src/utils"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	var err error
	dsn := fmt.Sprintf(
		"host=db user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Shanghai",
		config.Config.DB_USER,
		config.Config.DB_PASSWORD,
		config.Config.DB_NAME,
		config.Config.DB_PORT,
	)
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		utils.LoggerFatalf("Failed to connect to the database! \n", err)
	}

	utils.LoggerInfo("Connected to database!")
	utils.LoggerInfo("Running migrations")

	err = DB.AutoMigrate(
		&eventpb.Event{},
	)

	if err != nil {
		utils.LoggerInfof("Failed to connect to migrate! \n", err)
	}

	utils.LoggerInfo("Migrations done!")
}
