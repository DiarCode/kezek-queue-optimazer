import { COLORS } from "@/shared/constants/colors";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { Modal } from "../modal/Modal";
import { FlatList } from "@/shared/components/flat-list/FlatList";
import { PROFILE_NAVBAR_LINKS } from "@/shared/config/pages-links/pages-links";
import Link from "next/link";

interface IProfileModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const ProfileModal: FC<IProfileModalProps> = ({
  showModal,
  setShowModal,
}) => {
  return (
    <Modal visible={showModal}>
      {/* Head */}
      <div className="flex justify-between items-center border-b-[1px] border-slate-200 pb-4">
        <h3 className="text-base text-black font-semibold">Profile</h3>
        <button onClick={() => setShowModal(false)}>
          <CloseRoundedIcon htmlColor={COLORS.black} />
        </button>
      </div>

      {/* Body */}
      <div className="pt-4 pb-4">
        <FlatList
          spaceVertical="6px"
          bottomPadding="0"
          data={Object.entries(PROFILE_NAVBAR_LINKS)}
          cb={([_, page]) => (
            <Link
              className="hover:text-gray-500 transition-all duration-200"
              href={page.link}
              key={page.name}
            >
              {page.name}
            </Link>
          )}
        />
      </div>

      <div className="border-t-[1px] border-slate-200 pt-2">
        <button className="text-primary">Logout</button>
      </div>
    </Modal>
  );
};
