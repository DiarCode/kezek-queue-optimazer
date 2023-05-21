package models

import "time"

type Event struct {
	Id          int64  `gorm:"primaryKey" json:"id"`
	Title       string `json:"title"`
	Image       string `json:"image"`
	Description string `json:"description"`
	CreatedBy   int64  `json:"createdBy"`
	TimeBegin   time.Time `json:"timeBegin"`
	TimeEnd     time.Time `json:"timeEnd"`
	CreatedAt   time.Time `json:"created_at"`
}
