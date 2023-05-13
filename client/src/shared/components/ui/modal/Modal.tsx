import { FC, PropsWithChildren, SyntheticEvent } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface IModalProps extends PropsWithChildren {
  visible: boolean;
  setVisibleState: () => void;
  title?: string;
}

export const Modal: FC<IModalProps> = ({
  children,
  visible,
  setVisibleState,
  title,
}) => {
  const onInsideModalClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {visible && (
        <div
          onClick={setVisibleState}
          className="fixed inset-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full bg-black/80 flex items-center justify-center"
        >
          <div
            className="relative inset-0 h-fit w-full max-w-2xl bg-white rounded-xl p-6"
            onClick={onInsideModalClick}
          >
            <div
              className="absolute right-5 top-5 cursor-pointer"
              onClick={setVisibleState}
            >
              <CloseRoundedIcon />
            </div>

            {title && <h1 className="font-semibold text-xl mb-10">{title}</h1>}
            {children}
          </div>
        </div>
      )}
    </>
  );
};
