import { FC, PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {
  visible: boolean;
  strictHeight?: boolean;
  className?: string;
}

const STRICT_HEIGHT = "384px";
const DEFAULT_HEIGHT = "fit-content";

export const Modal: FC<ModalProps> = ({
  children,
  visible,
  strictHeight = false,
  className,
}) => {
  const modalHeight = strictHeight ? STRICT_HEIGHT : DEFAULT_HEIGHT;

  return (
    <div
      className={`z-50 flex absolute inset-0 top-[82px] md:top-[86px] right-0 md:right-2
       justify-end transition-all duration-300 ease`}
      style={{ visibility: visible ? "visible" : "hidden" }}
    >
      <div
        className={`${className} border-[1px]  border-slate-300 w-full sm:w-96 rounded-xl
      transition-transform  duration-300 ease-in-out bg-cgray p-4 ${
        visible ? "translate-x-0" : "translate translate-x-full"
      }`}
        style={{ height: modalHeight }}
      >
        {children}
      </div>
    </div>
  );
};
