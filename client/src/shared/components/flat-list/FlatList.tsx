import React, { FC, useMemo } from "react";

type FlatListProps<T> = {
  data: T[];
  cb: (items: T, index: number) => React.ReactNode;
  space?: string;
  horizontal?: boolean;
  scroll?: boolean;
  wrap?: boolean;
  alignCentered?: boolean;
};

const DEFAULT_SPACE = "24px";

export const FlatList = <T extends unknown>({
  data,
  cb,
  space = DEFAULT_SPACE,
  horizontal = false,
  alignCentered = true,
  wrap = true,
}: FlatListProps<T>) => {
  const renderedItems = useMemo(() => {
    return data.map(cb);
  }, [cb, data]);

  return (
    <div
      className={`w-full flex scrollbar-hide ${
        alignCentered ? "items-center" : "items-start"
      } pb-3 ${wrap ? "flex-wrap" : ""} 
        ${horizontal ? "overflow-x-auto flex-nowrap" : ""}`}
      style={{ gap: space }}
    >
      {renderedItems}
    </div>
  );
};
