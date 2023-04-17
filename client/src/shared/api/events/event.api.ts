import { eventMock } from "@/shared/mock/eventMock";
import { QueueEvent } from "@/shared/utils/types/event-card/QueueEvent.type";

export const getAllEvents = async (): Promise<QueueEvent[]> => {
  return eventMock;
};
