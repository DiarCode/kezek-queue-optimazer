import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import { COLORS } from "@/shared/constants/colors";
import Link from "next/link";

interface LogoProps {
  size?: "base" | "large";
  color?: string;
}

export const Logo = ({ size = "base", color = COLORS.black }: LogoProps) => {
  const baseClassname = "text-lg sm:text-2xl";
  const largeClassname = "text-2xl sm:text-4xl";

  const sizeClassName = size === "base" ? baseClassname : largeClassname;

  return (
    <Link href={PAGES_LINKS.Home.link}>
      <p className={`${sizeClassName} font-bold`} style={{ color: color }}>
        Kezek
      </p>
    </Link>
  );
};
