package services

import (
	"context"

	eventpb "github.com/DiarCode/kezek-queue-optimazer/events/src/gen/event"
)

type EventService struct{}

func (*EventService) CreateEvent(ctx context.Context, req *eventpb.CreateEventRequest) (*eventpb.Event, error) {
	return nil, nil
}

func (*EventService) GetAllEvents(ctx context.Context, req *eventpb.EmptyRequest) (*eventpb.GetAllEventsResponse, error) {
	return nil, nil
}

func (*EventService) GetEventById(ctx context.Context, req *eventpb.GetEventByIdRequest) (*eventpb.Event, error) {
	return nil, nil
}
