import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import { COLORS } from "@/shared/constants/colors";
import CircleIcon from "@mui/icons-material/Circle";
import Link from "next/link";

export const NotificationsModalItem = () => {
  const queueLink = PAGES_LINKS.Queues.sub_links.QueueExcerpt("2");

  return (
    <Link href={queueLink}>
      <div className="hover:bg-gray-200 rounded-lg cursor-pointer">
        <div className="flex items-start gap-x-3 p-2">
          <span className="w-[10px] h-[10px] bg-primary rounded-full mt-[6px]" />

          <div className="flex-1">
            <p className="text-sm text-black font-medium">
              Your queue on the{" "}
              <span className="font-semibold">Astana Hub Event</span> comes up
              in 15 minutes
            </p>
            <p className="text-sm text-gray-400 mt-1">2h ago</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
