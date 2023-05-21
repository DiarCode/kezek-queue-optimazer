package utils

import (
	"time"

	"github.com/DiarCode/kezek-queue-optimazer/auth/src/config"
	"github.com/DiarCode/kezek-queue-optimazer/auth/src/models"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

type Claims struct {
	ID        int64  `json:"id"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email"`

	jwt.RegisteredClaims
}

func HashPassword(pwd []byte) string {
	hash, _ := bcrypt.GenerateFromPassword(pwd, bcrypt.MinCost)
	return string(hash)
}

func ComparePasswords(hashedPwd string, plainPwd string) bool {
	byteHash := []byte(hashedPwd)
	bytePlainPsw := []byte(plainPwd)
	err := bcrypt.CompareHashAndPassword(byteHash, bytePlainPsw)
	return err == nil
}

func GenerateToken(user models.User) (string, error) {
	expirationTime := &jwt.NumericDate{
		Time: time.Now().Add(time.Hour * 24),
	}

	claims := &Claims{
		ID:        user.Id,
		Email:     user.Email,
		FirstName: user.FirstName,
		LastName:  user.LastName,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: expirationTime,
		},
	}

	jwtKey := config.Config.JWT_KEY
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString([]byte(jwtKey))

	return tokenString, err
}

// func ValidateToken() {

// }
