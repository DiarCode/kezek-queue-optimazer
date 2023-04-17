import { FlatList } from "@/shared/components/flat-list/FlatList";
import { useQueueEvents } from "@/shared/hooks/useQueueEvents/useQueueEvents";
import { Layout } from "@/shared/layouts/Layout";
import { QueueEventItem, QueueEventList } from "@/widgets/event-cards";
import React from "react";

export const EventsScreen = () => {
  const { data } = useQueueEvents();

  const rendered = data?.map(item => (
    <QueueEventItem key={item.id} data={item} />
  ));

  return (
    <Layout title="Kezek Events">
      <FlatList
        data={data || []}
        cb={item => <QueueEventItem key={item.id} data={item} />}
      />
    </Layout>
  );
};
