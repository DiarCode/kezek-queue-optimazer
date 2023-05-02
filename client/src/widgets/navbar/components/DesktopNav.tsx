import { DESKTOP_NAVBAR_LINKS } from "@/shared/config/pages-links/pages-links";
import { COLORS } from "@/shared/constants/colors";
import Link from "next/link";
import { useRouter } from "next/router";

const selectedRouteStyle = { color: COLORS.primary };
const defaultRouteStyle = { color: COLORS.black };

export const DesktopNav = () => {
  const { route } = useRouter();

  const renderedLinks = Object.entries(DESKTOP_NAVBAR_LINKS).map(
    ([_, link]) => {
      const routeStyle =
        route === link.link ? selectedRouteStyle : defaultRouteStyle;

      return (
        <li key={link.name}>
          <Link href={link.link}>
            <p style={{ ...routeStyle }}>{link.name}</p>
          </Link>
        </li>
      );
    }
  );
  return (
    <div className="hidden sm:block">
      <ul className="flex items-center gap-x-7">{renderedLinks}</ul>
    </div>
  );
};
