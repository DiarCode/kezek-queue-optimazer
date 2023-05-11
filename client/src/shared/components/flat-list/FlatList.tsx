import { useMemo } from "react";

type FlatListProps<T> = {
  data: T[];
  cb: (items: T, index: number) => React.ReactNode;
  horizontal?: boolean;
  alignCentered?: boolean;
  className?: string;
  spaceVertical?: string;
  bottomPadding?: string;
};

const DEFAULT_VERTICAL_SPACE = "32px";
const DEFAULT_BOTTOM_PADDING = "28px";

export const FlatList = <T extends unknown>({
  data,
  cb,
  className,
  horizontal = false,
  alignCentered = true,
  spaceVertical = DEFAULT_VERTICAL_SPACE,
  bottomPadding = DEFAULT_BOTTOM_PADDING,
}: FlatListProps<T>) => {
  const renderedItems = useMemo(() => {
    return data.map(cb);
  }, [cb, data]);

  return (
    <div
      className={`w-full grid grid-cols-fluid gap-x-4 sm:gap-x-6 gap-y-8 scrollbar-hide 
        sm:scrollbar-default items-start
        ${className}
        ${horizontal ? "grid-flow-col auto-cols-[296px] overflow-x-auto" : ""}
        ${alignCentered ? "items-center" : "items-start"}
      `}
      style={{ rowGap: spaceVertical, paddingBottom: bottomPadding }}
    >
      {renderedItems}
    </div>
  );
};
