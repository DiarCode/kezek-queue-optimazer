import React, { FC, useMemo } from "react";

type FlatListProps<T> = {
  data: T[];
  cb: (items: T, index: number) => React.ReactNode;
  horizontal?: boolean;
  alignCentered?: boolean;
};

export const FlatList = <T extends unknown>({
  data,
  cb,
  horizontal = false,
  alignCentered = true,
}: FlatListProps<T>) => {
  const renderedItems = useMemo(() => {
    return data.map(cb);
  }, [cb, data]);

  return (
    <div
      className={`w-full grid grid-cols-fluid gap-x-4 sm:gap-x-6 gap-y-8 scrollbar-hide 
        sm:scrollbar-default items-start pb-7
        ${horizontal ? "grid-flow-col auto-cols-[296px] overflow-x-auto" : ""}
        ${alignCentered ? "items-center" : "items-start"}
      `}
    >
      {renderedItems}
    </div>
  );
};
