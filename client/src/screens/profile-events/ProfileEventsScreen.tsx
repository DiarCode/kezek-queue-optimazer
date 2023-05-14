import { Title } from "@/shared/components/ui/title/Title";
import { Layout } from "@/shared/layouts/Layout";
import { EventItem } from "@/widgets/event-cards";
import { CreateProfile } from "./components/create-profile/CreateProfile";
import { FlatList } from "@/shared/components/flat-list/FlatList";
import { eventMock } from "@/shared/mock/eventMock";
import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";

export const ProfileEventsScreen = () => {
  return (
    <Layout title="My Events">
      <div className="flex justify-between items-center mb-6">
        <Title content="My Events" />
        <CreateProfile />
      </div>

      <FlatList
        data={eventMock || []}
        cb={item => (
          <EventItem
            key={item.id}
            data={item}
            link={PAGES_LINKS.Profile.sub_links.MyEvents.sub_links.MyEventExcerpt.link(
              `${item.id}`
            )}
          />
        )}
        alignCentered={false}
      />
    </Layout>
  );
};
