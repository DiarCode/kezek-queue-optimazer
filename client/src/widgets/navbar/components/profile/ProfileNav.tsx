import { useAuth } from "@/shared/hooks/useAuth/useAuth";
import { useNavbar } from "../../hooks/useNavbar";
import { ProfileModal } from "./ProfileModal";

export const ProfileNav = () => {
  const { user } = useAuth();

  const {
    profileMenu: { open, setOpen },
  } = useNavbar();

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        <div className="w-8 h-8 cursor-pointer rounded-full bg-primary flex items-center justify-center">
          <p className="text-white text-sm font-semibold">
            {user?.name.charAt(0)}
          </p>
        </div>
      </button>

      <ProfileModal showModal={open} setShowModal={setOpen} />
    </div>
  );
};
