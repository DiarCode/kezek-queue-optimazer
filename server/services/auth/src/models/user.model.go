package models

import "time"

type User struct {
	Id        int64     `gorm:"primaryKey" json:"id"`
	FirstName string    `json:"firstName"`
	LastName  string    `json:"lastName"`
	Email     string    `gorm:"unique" json:"email"`
	Password  string    `json:"-"`
	CreatedAt time.Time `json:"created_at"`
}
