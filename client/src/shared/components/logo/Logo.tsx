import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href={PAGES_LINKS.Home.link}>
      <p className="text-lg font-bold">Kezek</p>
    </Link>
  );
};
