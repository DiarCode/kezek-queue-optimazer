import { Button } from "@/shared/components/ui/buttons/Button";
import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import Link from "next/link";

export const EventNotFound = () => {
  return (
    <div className="flex-1 h-full flex items-center justify-center flex-col">
      <p className="text-center font-bold text-xl">NO EVENT FOUND</p>
      <p className="text-center mb-5">Looks like the event does not exist</p>
      <Link href={PAGES_LINKS.Home.link}>
        <Button className="uppercase text-medium" solid>
          Return to HOMEPAGE
        </Button>
      </Link>
    </div>
  );
};
