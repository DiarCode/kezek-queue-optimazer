import { Dispatch, FC, SetStateAction, useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { COLORS } from "@/shared/constants/colors";

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
      className={`overflow-x-hidden overflow-y-auto z-50 flex absolute top-[80px] md:top-[86px] inset-0 h-screen
         justify-end transition-all duration-300 ease`}
      style={{ visibility: showModal ? "visible" : "hidden" }}
    >
      <div
        className={`border-[1px] border-slate-200 w-full sm:w-96 h-fit rounded-xl
        transition-transform duration-300 ease-in-out bg-white p-4 ${
          showModal ? " translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Head */}
        <div className="flex justify-between items-center border-b-[1px] border-slate-200 pb-4">
          <h3 className="text-base text-black font-medium">Notifications</h3>
          <button onClick={() => setShowModal(false)}>
            <CloseRoundedIcon htmlColor={COLORS.black} />
          </button>
        </div>

        {/* Body */}
        <div className="pt-4">
          <div>Task1</div>
          <div>Task1</div>
          <div>Task1</div>
          <div>Task1</div>
          <div>Task1</div>
        </div>
      </div>
    </div>
  );
};
