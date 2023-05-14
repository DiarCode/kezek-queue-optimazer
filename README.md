# Kezek

Queue Optimazer written in Next.JS and Golang with GRPC.

## Starting Client Application

Run `cd client/ npm run dev` for a dev server. Navigate to `http://localhost:3000/`. The application will automatically reload if you change any of the source files.

## Starting Server Application

Run the server with Docker Compose to up server and database together.
`cd server/ go run ./main.go`
(Don't forget to initialize env variables)

## Starting All Together

Run the both sever and client sides with Docker Compose.
`docker-compose up`
(Don't forget to initialize env variables)
