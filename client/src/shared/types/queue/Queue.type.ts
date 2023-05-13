import { QueueEvent } from "../event/QueueEvent.type";
import { QueueItem } from "./QueueItem.type";

export type Queue = {
  id: number;
  event: QueueEvent;
  queueItems: QueueItem[];
};
