import { Button } from "@/shared/components/ui/buttons/Button";
import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import { useParams } from "@/shared/hooks/useParams/useParams";
import { useQueueEvent } from "@/shared/hooks/useQueueEvents/useQueueEvents";
import { Layout } from "@/shared/layouts/Layout";
import Link from "next/link";
import { EventNotFound } from "./components/EventNotFound/EventNotFound";

const DEFAULT_PAGE_TITLE = "Event";

export const EventsExcerptScreen = () => {
  const id = useParams("id");
  const { data, isError } = useQueueEvent(id);

  const pageTitle = data?.title || DEFAULT_PAGE_TITLE;

  return (
    <Layout title={pageTitle}>
      {isError ? <EventNotFound /> : <div></div>}
    </Layout>
  );
};
