import { MOBILE_NAVBAR_LINKS } from "@/shared/config/pages-links/pages-links";
import Link from "next/link";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { useNavbar } from "../context/NavbarConextProvider";
import { COLORS } from "@/shared/constants/colors";

export const MobileNav = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useNavbar();

  const renderedLinks = Object.entries(MOBILE_NAVBAR_LINKS).map(([_, link]) => (
    <li key={link.name}>
      <Link href={link.link}>
        <p className="text-white text-base">{link.name}</p>
      </Link>
    </li>
  ));

  const onEmptyAreaClick = () => {
    setMobileMenuOpen(false);
  };

  const renderedMenuIcon = <MoreVertIcon />;

  return (
    <div className="sm:hidden">
      <button onClick={() => setMobileMenuOpen(prev => !prev)}>
        {renderedMenuIcon}
      </button>

      <div
        className={`z-50 flex absolute top-[74px] left-0 w-full h-screen
            flex-1 justify-end transition-all duration-300 ease`}
        style={{ visibility: mobileMenuOpen ? "visible" : "hidden" }}
        onClick={onEmptyAreaClick}
      >
        <div
          className={`flex w-full h-fit py-7 justify-center rounded-xl
            transition-transform duration-300 ease-in-out bg-primary ${
              mobileMenuOpen ? " translate-x-0" : "translate-x-full"
            }`}
        >
          <ul className="flex flex-col items-center gap-y-4">
            {renderedLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};
