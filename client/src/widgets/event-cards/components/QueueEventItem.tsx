import { Button } from "@/shared/components/ui/buttons/Button";
import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import { COLORS } from "@/shared/constants/colors";
import { QueueEvent } from "@/shared/utils/types/event-card/QueueEvent.type";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface QueueEventItemsProps {
  data: QueueEvent;
}

const MAX_DESCR_SIZE = 60;

export const QueueEventItem: FC<QueueEventItemsProps> = ({ data }) => {
  const slicedDescription = data.description
    .slice(0, MAX_DESCR_SIZE)
    .concat("...");

  const eventLink = `${PAGES_LINKS.Events.link}/${data.id}`;

  return (
    <div className="w-full">
      <Link href={eventLink} className="text-xs text-primary">
        <div className="relative h-[182px] sm:h-[172px]">
          <Image src={data.img} alt={data.title} fill className="rounded-xl" />
        </div>
      </Link>

      <div className="mt-3 sm:mt-4 px-2">
        <h1 className="text-sm sm:text-base text-black font-semibold truncate">
          {data.title}
        </h1>

        <p className="mt-1 font-normal text-xs sm:text-sm text-black">
          {slicedDescription}
        </p>
      </div>

      <div className="flex items-center justify-between mt-3 sm:mt-4 px-2 pr-4">
        <p className="flex-grow-1 text-gray-500 text-xs">10 December 2022</p>
        <Link href={eventLink} className="text-xs text-primary">
          See more
        </Link>
      </div>
    </div>
  );
};
