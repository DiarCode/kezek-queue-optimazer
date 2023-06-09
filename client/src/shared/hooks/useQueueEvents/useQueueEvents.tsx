import { getAllEvents, getEventById } from "@/shared/api/events/event.api";
import { QueueEvent } from "@/shared/types/event/QueueEvent.type";
import { useQuery } from "@tanstack/react-query";

export function useQueueEvents() {
  const response = useQuery<QueueEvent[]>([`events`], getAllEvents);

  return response;
}

export function useQueueEvent(id: string | undefined) {
  const response = useQuery<QueueEvent>(
    [`events/${id}`],
    () => getEventById({ id: id! }),
    {
      enabled: id !== undefined,
    }
  );
  return response;
}
