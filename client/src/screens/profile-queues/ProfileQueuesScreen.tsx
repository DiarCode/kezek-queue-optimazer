import { Title } from "@/shared/components/ui/title/Title";
import { Layout } from "@/shared/layouts/Layout";
import { queueMock } from "@/shared/mock/queueMock";
import { QueueList } from "@/widgets/queue-cards";

export const ProfileQueuesScreen = () => {
  return (
    <Layout title="My Queues">
      <Title content="My Queues" className="mb-4" />
      <QueueList data={queueMock} />
    </Layout>
  );
};
