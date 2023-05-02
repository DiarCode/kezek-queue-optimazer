import { Button } from "@/shared/components/ui/buttons/Button";
import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import Link from "next/link";

const NotFoundScreen = () => {
  return (
    <div
      className="w-screen h-screen overflow-hidden 
        flex items-center justify-center bg-white font-montserrat p-3"
    >
      <div className="flex flex-col items-center gap-y-2">
        <h1
          className="text-[70px] sm:text-[100px] font-bold mb-4 text-transparent
            bg-clip-text bg-gradient-to-r from-[#ff00cc] to-[#333399]"
        >
          Oops!
        </h1>
        <p className="text-black font-semibold text-lg sm:text-xl capitalize">
          404 - Page not found
        </p>

        <p className="text-black w-full sm:w-[60%] font-normal text-sm sm:text-base text-center mb-6">
          The page you are looking for might have been removed, renamed or is
          temporarily unavailable
        </p>

        <Link href={PAGES_LINKS.Home.link}>
          <Button solid>
            <p className="text-white text-sm">Go to Homepage</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundScreen;
