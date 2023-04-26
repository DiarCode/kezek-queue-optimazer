import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import { useAuth } from "@/shared/hooks/useAuth/useAuth";
import Link from "next/link";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { COLORS } from "@/shared/constants/colors";

export const AuthNav = () => {
  const { isAuth, user } = useAuth();

  return (
    <>
      {!isAuth ? (
        <div className="flex items-center gap-x-4">
          <Link href={PAGES_LINKS.Login.link} className="hidden sm:block">
            <p>{PAGES_LINKS.Login.name}</p>
          </Link>

          <Link href={PAGES_LINKS.Signup.link}>
            <button className="py-2 px-5 rounded-xl bg-primary">
              <p className="text-sm text-white">{PAGES_LINKS.Signup.name}</p>
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-x-4">
          <div className="cursor-pointer">
            <NotificationsNoneOutlinedIcon
              htmlColor={COLORS.black}
              fontSize="medium"
            />
          </div>

          <div className="w-8 h-8 cursor-pointer rounded-full bg-primary flex items-center justify-center">
            <p className="text-white text-sm font-semibold">
              {user?.name.charAt(0)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
