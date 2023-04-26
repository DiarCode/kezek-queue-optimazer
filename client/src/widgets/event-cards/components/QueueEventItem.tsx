import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import { QueueEvent } from "@/shared/types/event-card/QueueEvent.type";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { getFormattedDescription } from "../utils/get-formatted-descr";

interface QueueEventItemsProps {
  data: QueueEvent;
}

const MAX_DESCR_SIZE = 60;

export const QueueEventItem: FC<QueueEventItemsProps> = ({ data }) => {
  const [formattedDescr, formattedDate] = getFormattedDescription({
    text: data.description,
    date: data.date,
    maxSize: MAX_DESCR_SIZE,
  });

  const eventLink = `${PAGES_LINKS.Events.link}/${data.id}`;

  return (
    <div className="w-full bg-cgray rounded-2xl">
      <Link href={eventLink}>
        <div className="relative h-[182px] sm:h-[172px]">
          <Image
            src={data.img}
            alt={data.title}
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </Link>

      <div className="mt-3 px-4 pb-5">
        <Link href={eventLink}>
          <h1
            className="text-sm sm:text-base text-black font-semibold truncate
             hover:text-primary transition-all duration-300"
          >
            {data.title}
          </h1>
        </Link>

        <p className="mt-1 font-normal text-xs text-gray-600">
          {formattedDescr}
        </p>

        <p className="mt-3 text-primary_light text-xs">{formattedDate}</p>
      </div>
    </div>
  );
};
