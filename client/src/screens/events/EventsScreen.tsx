import { FlatList } from "@/shared/components/flat-list/FlatList";
import { useQueueEvents } from "@/shared/hooks/useQueueEvents/useQueueEvents";
import { Layout } from "@/shared/layouts/Layout";
import { EventItem } from "@/widgets/event-cards";
import { EventsScreenTitle } from "./components/events-screen-title/EventsScreenTitle";
import EventsScreenFilter from "./components/filter/EventsScreenFilter";

export const EventsScreen = () => {
  const { data } = useQueueEvents();

  return (
    <Layout title="Kezek Events">
      <section className="flex justify-between items-end mb-6">
        <EventsScreenTitle />
        <EventsScreenFilter />
      </section>

      <FlatList
        data={data || []}
        cb={item => <EventItem key={item.id} data={item} />}
      />
    </Layout>
  );
};
