import { Logo } from "@/shared/components/logo/Logo";
import { FC } from "react";
import { useNavbar } from "../hooks/useNavbar";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";
import { AuthNav } from "./AuthNav";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="sticky top-0 flex z-20 justify-between items-center py-6 bg-white">
      <Logo />

      {/* Appear on mobile screen */}
      <section className="sm:hidden flex items-center gap-x-3">
        <AuthNav />
        <MobileNav />
      </section>

      <DesktopNav />

      <div className="hidden sm:block">
        <AuthNav />
      </div>
    </nav>
  );
};
