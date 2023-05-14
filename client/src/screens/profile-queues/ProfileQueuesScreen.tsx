import { FlatList } from "@/shared/components/flat-list/FlatList";
import { Title } from "@/shared/components/ui/title/Title";
import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import { Layout } from "@/shared/layouts/Layout";
import { queueMock } from "@/shared/mock/queueMock";
import { EventItem } from "@/widgets/event-cards";

export const ProfileQueuesScreen = () => {
  return (
    <Layout title="My Queues">
      <Title content="My Queues" className="mb-4" />
      <FlatList
        data={queueMock || []}
        cb={item => (
          <EventItem
            key={item.id}
            data={item.event}
            link={PAGES_LINKS.Profile.sub_links.MyQueues.sub_links.MyQueuesExcerpt.link(
              `${item.event.id}`
            )}
          />
        )}
        alignCentered={false}
      />
    </Layout>
  );
};
