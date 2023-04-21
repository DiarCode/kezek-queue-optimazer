import { Button } from "@/shared/components/ui/buttons/Button";
import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import { useParams } from "@/shared/hooks/useParams/useParams";
import { useQueueEvent } from "@/shared/hooks/useQueueEvents/useQueueEvents";
import { Layout } from "@/shared/layouts/Layout";
import Link from "next/link";
import { EventNotFound } from "./components/EventNotFound/EventNotFound";
import Image from "next/image";

const DEFAULT_PAGE_TITLE = "Event";
const MOCK_EVENT_IMAGE =
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
const MOCK_AVATAR_IMAGE =
  "https://images.unsplash.com/photo-1560622496-c49bec679e71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";

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
        className="grid sm:grid-flow-row lg:px-32 gap-x-10 sm:pt-8
        grid-cols-none sm:grid-cols-3 lg:grid-cols-6 "
      >
        <div className="sm:col-span-2 lg:col-span-4 sm:pr-6 flex flex-col mb-6">
          <div className="mb-4 sm:mb-8 flex items-center gap-x-5">
            <div className="relative w-8 sm:w-12 h-8 sm:h-12">
              <Image
                src={MOCK_AVATAR_IMAGE}
                alt="name"
                className="object-cover rounded-full"
                fill
              />
            </div>

            <div>
              <p className="font-semibold text-sm sm:text-base text-black">
                Published by Astana Hub
              </p>
              <p className="text-xs sm:text-sm text-gray-600">June 12th 2023</p>
            </div>
          </div>

          <h1 className="font-bold text-xl sm:text-3xl mb-4 sm:mb-6">
            Pitchfork Reviews Your Kids’ Living Room Performance
          </h1>

          <div className="relative w-full min-h-[200px] sm:h-[382px] mb-4 sm:mb-6">
            <Image
              src={MOCK_EVENT_IMAGE}
              alt="title"
              className="object-cover rounded-xl"
              fill
              priority
            />
          </div>

          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium repellendus voluptate eum unde. Nemo fugit dolorem
              provident porro a quas dolorum quae enim, dicta sunt saepe ut
              corrupti, aperiam atque? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Consectetur quae ad quia magnam eius veniam odio
              beatae id. Mollitia officia voluptatibus excepturi nemo laboriosam
              fuga, laudantium corporis expedita perspiciatis optio. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit.
              <br />
              <br />
              Accusantium repellendus voluptate eum unde. Nemo fugit dolorem
              provident porro a quas dolorum quae enim, dicta sunt saepe ut
              corrupti, aperiam atque? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Consectetur quae ad quia magnam eius veniam odio
              beatae id. Mollitia officia voluptatibus excepturi nemo laboriosam
              fuga, laudantium corporis expedita perspiciatis optio.
            </p>
          </div>
        </div>

        <aside className="sm:relative sm:col-span-1 lg:col-span-2">
          <div className="w-full sm:sticky sm:top-[86px]  sm:z-20 bg-cgray rounded-xl p-7 mb-5">
            <div className="flex flex-col gap-y-5">
              <div>
                <p className="text-sm text-gray-600 text-center mb-3">
                  People in Queue
                </p>
                <p className="text-center font-bold text-4xl">5</p>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">Aproximate Free Time</p>
                <p className="text-sm">11:00</p>
              </div>

              <Button className="mt-3" solid>
                Apply
              </Button>
            </div>
          </div>

          <div className="w-full sm:sticky sm:top-[380px] lg:top-[366px] sm:z-20 bg-cgray rounded-xl p-7">
            <div className="flex flex-col gap-y-3">
              <div>
                <p className="text-sm text-gray-600">Place</p>
                <p className="text-sm">Astana, Kabanbay Batyra 21</p>
              </div>

              <div className="flex gap-x-10 items-start">
                <div>
                  <p className="text-sm text-gray-600">Start Time</p>
                  <p className="text-sm">09:00</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600">End Time</p>
                  <p className="text-sm">22:00</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Layout>
  );
};
