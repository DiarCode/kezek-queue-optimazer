// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v4.23.0
// source: protos/event/event.proto

package event

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// EventServiceClient is the client API for EventService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type EventServiceClient interface {
	CreateEvent(ctx context.Context, in *CreateEventRequest, opts ...grpc.CallOption) (*Event, error)
	GetAllEvents(ctx context.Context, in *EmptyRequest, opts ...grpc.CallOption) (*GetAllEventsResponse, error)
	GetEventById(ctx context.Context, in *GetEventByIdRequest, opts ...grpc.CallOption) (*Event, error)
}

type eventServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewEventServiceClient(cc grpc.ClientConnInterface) EventServiceClient {
	return &eventServiceClient{cc}
}

func (c *eventServiceClient) CreateEvent(ctx context.Context, in *CreateEventRequest, opts ...grpc.CallOption) (*Event, error) {
	out := new(Event)
	err := c.cc.Invoke(ctx, "/eventpb.EventService/CreateEvent", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *eventServiceClient) GetAllEvents(ctx context.Context, in *EmptyRequest, opts ...grpc.CallOption) (*GetAllEventsResponse, error) {
	out := new(GetAllEventsResponse)
	err := c.cc.Invoke(ctx, "/eventpb.EventService/GetAllEvents", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *eventServiceClient) GetEventById(ctx context.Context, in *GetEventByIdRequest, opts ...grpc.CallOption) (*Event, error) {
	out := new(Event)
	err := c.cc.Invoke(ctx, "/eventpb.EventService/GetEventById", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// EventServiceServer is the server API for EventService service.
// All implementations must embed UnimplementedEventServiceServer
// for forward compatibility
type EventServiceServer interface {
	CreateEvent(context.Context, *CreateEventRequest) (*Event, error)
	GetAllEvents(context.Context, *EmptyRequest) (*GetAllEventsResponse, error)
	GetEventById(context.Context, *GetEventByIdRequest) (*Event, error)
	mustEmbedUnimplementedEventServiceServer()
}

// UnimplementedEventServiceServer must be embedded to have forward compatible implementations.
type UnimplementedEventServiceServer struct {
}

func (UnimplementedEventServiceServer) CreateEvent(context.Context, *CreateEventRequest) (*Event, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateEvent not implemented")
}
func (UnimplementedEventServiceServer) GetAllEvents(context.Context, *EmptyRequest) (*GetAllEventsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAllEvents not implemented")
}
func (UnimplementedEventServiceServer) GetEventById(context.Context, *GetEventByIdRequest) (*Event, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetEventById not implemented")
}
func (UnimplementedEventServiceServer) mustEmbedUnimplementedEventServiceServer() {}

// UnsafeEventServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to EventServiceServer will
// result in compilation errors.
type UnsafeEventServiceServer interface {
	mustEmbedUnimplementedEventServiceServer()
}

func RegisterEventServiceServer(s grpc.ServiceRegistrar, srv EventServiceServer) {
	s.RegisterService(&EventService_ServiceDesc, srv)
}

func _EventService_CreateEvent_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateEventRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EventServiceServer).CreateEvent(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/eventpb.EventService/CreateEvent",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EventServiceServer).CreateEvent(ctx, req.(*CreateEventRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EventService_GetAllEvents_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EmptyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EventServiceServer).GetAllEvents(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/eventpb.EventService/GetAllEvents",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EventServiceServer).GetAllEvents(ctx, req.(*EmptyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _EventService_GetEventById_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetEventByIdRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(EventServiceServer).GetEventById(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/eventpb.EventService/GetEventById",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(EventServiceServer).GetEventById(ctx, req.(*GetEventByIdRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// EventService_ServiceDesc is the grpc.ServiceDesc for EventService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var EventService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "eventpb.EventService",
	HandlerType: (*EventServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateEvent",
			Handler:    _EventService_CreateEvent_Handler,
		},
		{
			MethodName: "GetAllEvents",
			Handler:    _EventService_GetAllEvents_Handler,
		},
		{
			MethodName: "GetEventById",
			Handler:    _EventService_GetEventById_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "protos/event/event.proto",
}
