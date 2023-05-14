import { Layout } from "@/shared/layouts/Layout";
import { QueueExcerptBefore } from "./components/QueueExcerptWaiting";
import { QueueExcerptActive } from "./components/QueueExcerptActive";
import { Button } from "@/shared/components/ui/buttons/Button";
import Link from "next/link";

export const ProfileQueuesExcerptScreen = () => {
  const status = false;
  return (
    <Layout title="My Queue">
      <div className="h-screen flex flex-col items-center justify-center -mt-32">
        <div>
          <h1 className="text-center mt-7 font-bold text-2xl">
            Astana HUB Event
          </h1>
          <p className="text-center text-base text-gray-600">Queue Status</p>
        </div>

        {status ? <QueueExcerptActive /> : <QueueExcerptBefore />}

        <div className="bg-cgray p-7 rounded-xl mt-5 w-full max-w-md">
          <div className="flex flex-col gap-y-5">
            <div className="text-center">
              <p className="text-sm text-gray-600">Place</p>
              <p className="text-sm">Astana, Kabanbay Batyra 21</p>
            </div>

            <div className="flex gap-x-16 items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-gray-600">Start Time</p>
                <p className="text-sm">09:00</p>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">End Time</p>
                <p className="text-sm">22:00</p>
              </div>
            </div>
          </div>
        </div>

        <Link href="" className="w-full flex justify-center mt-7">
          <Button className="w-full max-w-md">Event Details</Button>
        </Link>
      </div>
    </Layout>
  );
};
