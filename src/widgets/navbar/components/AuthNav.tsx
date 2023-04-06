import { Button } from "@/shared/components/ui/buttons/Button";
import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import Link from "next/link";
import React from "react";

export const AuthNav = () => {
  return (
    <div className="flex items-center gap-x-7">
      <Link href={PAGES_LINKS.Login.link} className="hidden sm:block">
        <p>{PAGES_LINKS.Login.name}</p>
      </Link>

      <Link href={PAGES_LINKS.Signup.link}>
        <button className="py-2 px-5 rounded-xl bg-primary">
          <p className="text-sm text-white">{PAGES_LINKS.Signup.name}</p>
        </button>
      </Link>
    </div>
  );
};
