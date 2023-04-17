import { useParams } from "@/shared/hooks/useParams/useParams";
import { useQueueEvent } from "@/shared/hooks/useQueueEvents/useQueueEvents";
import { Layout } from "@/shared/layouts/Layout";

const DEFAULT_PAGE_TITLE = "Event";

export const EventsExcerptScreen = () => {
  const id = useParams("id");
  const { data } = useQueueEvent(id);

  const pageTitle = data?.title || DEFAULT_PAGE_TITLE;

  return (
    <Layout title={pageTitle}>
      <p>{data?.title}</p>
    </Layout>
  );
};
