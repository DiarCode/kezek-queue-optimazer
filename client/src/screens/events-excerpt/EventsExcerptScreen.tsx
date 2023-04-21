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
      {/* {isError ? (
        <EventNotFound />
      ) : (
        <div className="grid grid-flow-row grid-cols-5">
          <div className="col-span-3 bg-red-200"></div>
          <aside className="sticky col-span-2 bg-green-200"></aside>
        </div>
      )} */}

      <div
        className="grid grid-flow-row gap-x-7 sm:pt-5
        grid-cols-none sm:grid-cols-3 lg:grid-cols-4 "
      >
        <div className="sm:col-span-2 lg:col-span-3">
          <h1 className="font-bold">Hello Workd</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            similique nisi earum enim quibusdam iure ut et ipsam ab est dolore
            corrupti rem, nesciunt, perferendis ad nulla totam, rerum magnam?
          </p>
        </div>
        <aside className="sm:col-span-1 lg:col-span-1">
          <div className="w-full sm:sticky top-[86px] z-20 bg-cgray rounded-xl p-7">
            <h1>Aside</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              voluptates et illum ad modi, omnis corrupti, porro itaque amet
              autem incidunt, eum esse officiis repudiandae voluptatibus fugit
              sapiente error facere.
            </p>
          </div>
        </aside>
      </div>
    </Layout>
  );
};
