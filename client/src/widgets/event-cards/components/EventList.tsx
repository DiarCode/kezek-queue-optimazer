import { FlatList } from "@/shared/components/flat-list/FlatList";
import { FC } from "react";
import { EventItem } from "./EventItem";
import { QueueEvent } from "@/shared/types/event-card/QueueEvent.type";

type QueueEventListProps = {
  title: string;
  data: QueueEvent[] | undefined;
  className?: string;
  horizontal?: boolean;
};

export const EventList: FC<QueueEventListProps> = ({
  title,
  data,
  className,
  horizontal = true,
}) => {
  return (
    <div className={className}>
      <h1 className="text-base sm:text-lg font-semibold mb-3">{title}</h1>
      <FlatList
        data={data || []}
        cb={item => <EventItem key={item.id} data={item} />}
        horizontal={horizontal}
        alignCentered={false}
      />
    </div>
  );
};
