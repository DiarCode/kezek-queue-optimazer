import { Button } from "@/shared/components/ui/buttons/Button";
import { Layout } from "@/shared/layouts/Layout";

export const ProfileEventExcerptScreen = () => {
  return (
    <Layout title="My Event Queue">
      <div className="h-screen flex flex-col items-center justify-center -mt-32">
        <h1 className="text-center mt-7 font-bold text-2xl">
          Astana HUB Event
        </h1>
        <p className="text-center text-base text-gray-600">Queue Status</p>

        <div className="mt-7 bg-cgray p-7 rounded-xl w-full max-w-md flex flex-col gap-y-5">
          <div className="text-center">
            <p className="text-sm text-gray-600">Current Person</p>
            <p className="text-xl font-bold mt-1">Begisbayev Diar</p>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">Position</p>
            <p className="text-sm mt-1">7</p>
          </div>

          <Button className="w-full" solid>
            Approve
          </Button>
        </div>

        <div className="bg-cgray p-7 rounded-xl mt-5 w-full max-w-md">
          <div className="flex gap-x-12 items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-gray-600">People left</p>
              <p className="text-sm">34</p>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">Next Person</p>
              <p className="text-sm">13:20</p>
            </div>
          </div>
        </div>

        <Button className="mt-7 w-full max-w-md">Update Event Details</Button>
      </div>
    </Layout>
  );
};
