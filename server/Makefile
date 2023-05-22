protos:
	protoc --go_out=. --go-grpc_out=. protos/auth/*.proto
	protoc --go_out=. --go-grpc_out=. protos/event/*.proto
	protoc --go_out=. --go-grpc_out=. protos/user/*.proto
	protoc --go_out=. --go-grpc_out=. protos/queue/*.proto
	timeout -T 2
	move .\gen\ ".\gateway\src"
	move .\gen .\services\auth\src\gen
	move .\gen .\services\events\src\gen
	move .\gen .\services\queues\src\gen
