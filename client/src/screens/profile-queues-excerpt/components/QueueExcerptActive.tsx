import React from "react";

export const QueueExcerptActive = () => {
  return (
    <div className="mt-7 bg-cgray p-7 rounded-xl w-full max-w-md flex flex-col gap-y-5">
      <div className="text-center">
        <p className="text-sm text-gray-600">Personal Information</p>
        <p className="text-xl font-bold mt-1 text-primary">Begisbayev Diar</p>
      </div>

      <div className="flex gap-x-16 items-center justify-center">
        <div className="text-center">
          <p className="text-sm text-gray-600">Status</p>
          <p className="text-sm">Active</p>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">Position</p>
          <p className="text-sm">7</p>
        </div>
      </div>
    </div>
  );
};
