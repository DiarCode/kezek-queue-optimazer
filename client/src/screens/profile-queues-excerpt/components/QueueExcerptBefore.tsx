import React from "react";

export const QueueExcerptBefore = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center -mt-32">
      <h1 className="text-center mt-7 font-bold text-2xl">Astana HUB Event</h1>
      <p className="text-center text-base text-gray-600">Queue Status</p>

      <div className="mt-7 bg-cgray p-7 rounded-xl w-full max-w-md">
        <h2 className="text-center font-bold text-primary text-4xl md:text-5xl">
          5
        </h2>
        <p className="text-sm mt-3 text-center font-medium">
          People before you
        </p>

        <div className="text-center mt-5">
          <p className="text-sm text-gray-600">Aproximate Waiting Time</p>
          <p className="text-sm">2 hours</p>
        </div>
      </div>

      <div className="bg-cgray p-7 rounded-xl mt-5 w-full max-w-md">
        <div className="flex flex-col gap-y-5">
          <div className="text-center">
            <p className="text-sm text-gray-600">Place</p>
            <p className="text-sm">Astana, Kabanbay Batyra 21</p>
          </div>

          <div className="flex gap-x-10 items-center justify-center">
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
    </div>
  );
};
