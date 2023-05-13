import { User } from "../user/User.type";

export type QueueItem = {
  id: number;
  user: User;
  position: number;
  isCurrent: boolean;
  enteredTime: Date;
};
