import { FlatList } from "@/shared/components/flat-list/FlatList";
import { FC } from "react";
import { QueueEventItem } from "./QueueEventItem";
import { QueueEvent } from "@/shared/utils/types/event-card/QueueEvent.type";

type QueueEventListProps = {
  title: string;
  data: QueueEvent[] | undefined;
  className?: string;
};

export const QueueEventList: FC<QueueEventListProps> = ({
  title,
  data,
  className,
}) => {
  return (
    <div className={className}>
      <h1 className="text-base sm:text-lg font-semibold mb-3">{title}</h1>
      <FlatList
        data={data || []}
        cb={item => <QueueEventItem key={item.id} data={item} />}
        space="26px"
        horizontal
        alignCentered={false}
      />
    </div>
  );
};
