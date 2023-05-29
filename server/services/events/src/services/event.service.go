package services

import (
	"context"

	"github.com/DiarCode/kezek-queue-optimazer/events/src/database"
	eventpb "github.com/DiarCode/kezek-queue-optimazer/events/src/gen/event"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"gorm.io/gorm"
)

type EventService struct{}

func (*EventService) CreateEvent(ctx context.Context, req *eventpb.CreateEventRequest) (*eventpb.Event, error) {
	return nil, nil
}

func (*EventService) GetAllEvents(ctx context.Context, req *eventpb.EmptyRequest) (*eventpb.GetAllEventsResponse, error) {
	events := []*eventpb.Event{}
	err := database.DB.Find(&events).Error

	if err != nil {
		return nil, status.Error(codes.NotFound, "Events not found")
	}
	response := &eventpb.GetAllEventsResponse{
		Events: events,
	}

	return response, nil
}

func (*EventService) GetEventById(ctx context.Context, req *eventpb.GetEventByIdRequest) (*eventpb.Event, error) {
	event := eventpb.Event{}
	query := eventpb.Event{Id: req.Id}
	err := database.DB.First(&event, &query).Error

	if err == gorm.ErrRecordNotFound {
		return nil, status.Error(codes.NotFound, "Event not found")
	}

	return &event, nil
}
