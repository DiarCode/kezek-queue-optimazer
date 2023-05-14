import Image from "next/image";
import React, { FC } from "react";
import { Logo } from "../logo/Logo";
import { COLORS } from "@/shared/constants/colors";

interface IAuthBannerProps {
  src: string;
}

export const AuthBanner: FC<IAuthBannerProps> = ({ src }) => {
  return (
    <div className="hidden sm:block w-full h-full -ml-3 col-span-1 relative">
      <Image alt="login" className="object-cover" fill priority src={src} />

      <div className="absolute top-10 left-10 w-1/3">
        <Logo size="large" color={COLORS.primary} />
        <p className="mt-6">The modern way to save your time just in one app</p>
      </div>
    </div>
  );
};
