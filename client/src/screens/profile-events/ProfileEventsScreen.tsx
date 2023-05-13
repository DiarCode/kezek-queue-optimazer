import { Button } from "@/shared/components/ui/buttons/Button";
import { Title } from "@/shared/components/ui/title/Title";
import { Layout } from "@/shared/layouts/Layout";
import { EventList } from "@/widgets/event-cards";

export const ProfileEventsScreen = () => {
  return (
    <Layout title="My Events">
      <div className="flex justify-between items-center">
        <Title content="My Events" className="mb-4" />
        <Button solid>Create Event</Button>
      </div>

      <EventList data={[]} />
    </Layout>
  );
};
