import { COLORS } from "@/shared/constants/colors";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useNavbar } from "../hooks/useNavbar";
import { NotificationsModal } from "@/widgets/notifications";

export const NotificationsNav = () => {
  const {
    notificationMenu: { open, setOpen },
  } = useNavbar();

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        <NotificationsIcon />
      </button>

      <NotificationsModal showModal={open} setShowModal={setOpen} />
    </div>
  );
};

const NotificationsIcon = () => {
  return (
    <div className="relative">
      <NotificationsNoneOutlinedIcon
        htmlColor={COLORS.black}
        fontSize="medium"
      />

      <span className="w-4 h-4 absolute -right-1 -top-1 bg-primary rounded-full text-xs text-white">
        3
      </span>
    </div>
  );
};
