import { FlatList } from "@/shared/components/flat-list/FlatList";
import { FC } from "react";
import { QueueItem } from "./QueueItem";
import { Queue } from "@/shared/types/queue/Queue.type";

type QueueEventListProps = {
  data: Queue[] | undefined;
  className?: string;
  horizontal?: boolean;
};

export const QueueList: FC<QueueEventListProps> = ({
  data,
  className,
  horizontal = true,
}) => {
  return (
    <div className={className}>
      <FlatList
        data={data || []}
        cb={item => <QueueItem key={item.event.id} data={item.event} />}
        horizontal={horizontal}
        alignCentered={false}
      />
    </div>
  );
};
