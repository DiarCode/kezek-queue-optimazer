import { eventMock } from "@/shared/mock/eventMock";
import { QueueEvent } from "@/shared/types/event/QueueEvent.type";

export const getAllEvents = async (): Promise<QueueEvent[]> => {
  return eventMock;
};

export const getEventById = async ({
  id,
}: {
  id: string;
}): Promise<QueueEvent> => {
  return eventMock.find(item => item.id === parseInt(id)) as QueueEvent;
};
