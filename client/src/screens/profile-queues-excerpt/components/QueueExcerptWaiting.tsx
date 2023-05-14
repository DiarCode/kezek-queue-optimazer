import React from "react";

export const QueueExcerptBefore = () => {
  return (
    <div className="mt-7 bg-cgray p-7 rounded-xl w-full max-w-md">
      <div>
        <h2 className="text-center font-bold text-primary text-2xl md:text-3xl">
          5
        </h2>
        <p className="text-sm mt-3 text-center font-medium">
          People before you
        </p>
      </div>

      <div className="flex gap-x-16 items-center justify-center mt-5">
        <div className="text-center">
          <p className="text-sm text-gray-600">Status</p>
          <p className="text-sm">Waiting</p>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">Waiting Time</p>
          <p className="text-sm">2 hours</p>
        </div>
      </div>
    </div>
  );
};
