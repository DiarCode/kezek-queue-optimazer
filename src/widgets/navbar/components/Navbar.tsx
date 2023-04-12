import { Logo } from "@/shared/components/logo/Logo";
import React, { FC } from "react";
import { useNavbar } from "../context/NavbarConextProvider";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";
import { AuthNav } from "./AuthNav";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
  const { visible } = useNavbar();

  return (
    <nav
      className="sticky top-0 z-50 flex justify-between items-center py-6 bg-white"
      style={{ display: visible ? "flex" : "none" }}
    >
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
