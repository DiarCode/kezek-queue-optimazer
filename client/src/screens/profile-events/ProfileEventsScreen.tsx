import { Title } from "@/shared/components/ui/title/Title";
import { Layout } from "@/shared/layouts/Layout";
import { EventList } from "@/widgets/event-cards";
import { CreateProfile } from "./components/create-profile/CreateProfile";

export const ProfileEventsScreen = () => {
  return (
    <Layout title="My Events">
      <div className="flex justify-between items-center">
        <Title content="My Events" className="mb-4" />
        <CreateProfile />
      </div>

      <EventList data={[]} />
    </Layout>
  );
};
