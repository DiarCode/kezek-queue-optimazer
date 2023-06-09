package services

import (
	"github.com/DiarCode/kezek-queue-optimazer/auth/src/database"
	"github.com/DiarCode/kezek-queue-optimazer/auth/src/models"
	"gorm.io/gorm"
)

func CreateUser(user *models.User) *gorm.DB {
	return database.DB.Create(&user)
}

func DeleteUser(user *models.User) *gorm.DB {
	return database.DB.Delete(&user)
}

func GetUser(user *models.User, conds ...interface{}) *gorm.DB {
	return database.DB.Delete(&user, &conds)
}
