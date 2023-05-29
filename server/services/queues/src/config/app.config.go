package config

var Config *AppConfigType

type AppConfigType struct {
	APP_PORT int

	DB_URI  string
	DB_NAME string
}
