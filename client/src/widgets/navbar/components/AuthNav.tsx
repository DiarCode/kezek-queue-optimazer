import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import { useAuth } from "@/shared/hooks/useAuth/useAuth";
import Link from "next/link";
import { NotificationsNav } from "./notifications/NotificationsNav";
import { ProfileNav } from "./profile/ProfileNav";

export const AuthNav = () => {
  const { isAuth } = useAuth();

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
        <div className="flex items-center gap-x-5">
          <NotificationsNav />

          <ProfileNav />
        </div>
      )}
    </>
  );
};
