import Image from "next/image";
import { useState } from "react";

import bannerImage from "@/shared/assets/banner.jpg";
import { Button } from "../ui/buttons/Button";

const Banner = () => {
  return (
    <div className="block w-full h-[150px] sm:h-[300px] lg:h-[400px] relative">
      <Image
        placeholder="blur"
        src={bannerImage}
        alt="banner"
        priority={true}
        className="h-[150px] sm:h-[300px] lg:h-[400px] object-cover rounded-3xl bg-gray-400"
      />

      <div
        className="w-3/4 h-full z-10 absolute top-0 bottom-o left-0 
        rounded-3xl bg-gradient-to-r from-black/80 to-transparent
        flex items-center"
      >
        <div className="py-3 pl-8 sm:pl-20 lg:pl-32">
          <p className="text-sm sm:text-2xl lg:text-4xl text-gray-200 font-bold w-1/2 sm:w-3/4 lg:w-1/2 mb-2 sm:mb-8">
            Stop standing in boring lines - make your life easier
          </p>

          <Button
            solid
            className="text-white hidden sm:block sm:text-sm lg:text-base"
          >
            Appoint Online
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
