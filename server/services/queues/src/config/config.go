package config

var Config *AppConfig

type AppConfig struct {
	APP_PORT int

	DB_URI  string
	DB_NAME string
}
