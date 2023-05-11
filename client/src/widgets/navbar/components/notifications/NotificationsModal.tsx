import { Dispatch, FC, SetStateAction } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { COLORS } from "@/shared/constants/colors";
import { NotificationsModalItem } from "./NotificationsModalItem";
import { Modal } from "../modal/Modal";

interface INotificationsModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const NotificationsModal: FC<INotificationsModalProps> = ({
  showModal,
  setShowModal,
}) => {
  return (
    <Modal className="pb-16" visible={showModal} strictHeight>
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
    </Modal>
  );
};
