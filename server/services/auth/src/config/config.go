package config

var Config *AppConfig

type AppConfig struct {
	APP_PORT int

	JWT_KEY string

	DB_USER     string
	DB_PASSWORD string
	DB_NAME     string
	DB_PORT     string
}
