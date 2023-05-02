import { Dispatch, FC, SetStateAction, useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { COLORS } from "@/shared/constants/colors";
import { NotificationsModalItem } from "./NotificationsModalItem";

interface INotificationsModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const NotificationsModal: FC<INotificationsModalProps> = ({
  showModal,
  setShowModal,
}) => {
  return (
    <div
      className={`z-50 flex absolute top-[82px] md:top-[86px] right-0 md:right-2
         justify-end transition-all duration-300 ease`}
      style={{ visibility: showModal ? "visible" : "hidden" }}
    >
      <div
        className={`border-[1px]  border-slate-300 w-full sm:w-96 h-96 rounded-xl
        transition-transform  duration-300 ease-in-out bg-cgray p-4 pb-16 ${
          showModal ? "translate-x-0" : "translate translate-x-full"
        }`}
      >
        {/* Head */}
        <div className="flex justify-between items-center border-b-[1px] border-slate-200 pb-4">
          <h3 className="text-base text-black font-semibold">Notifications</h3>
          <button onClick={() => setShowModal(false)}>
            <CloseRoundedIcon htmlColor={COLORS.black} />
          </button>
        </div>

        {/* Body */}
        <div className="pt-4 flex flex-col gap-y-2 h-full overflow-y-auto">
          <NotificationsModalItem />
          <NotificationsModalItem />
          <NotificationsModalItem />
          <NotificationsModalItem />
          <NotificationsModalItem />
          <NotificationsModalItem />
          <NotificationsModalItem />
          <NotificationsModalItem />
          <NotificationsModalItem />
          <NotificationsModalItem />
        </div>
      </div>
    </div>
  );
};
