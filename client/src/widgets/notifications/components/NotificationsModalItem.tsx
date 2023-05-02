import { COLORS } from "@/shared/constants/colors";
import CircleIcon from "@mui/icons-material/Circle";

export const NotificationsModalItem = () => {
  return (
    <div className="hover:bg-gray-200 rounded-lg cursor-pointer">
      <div className="flex items-start gap-x-3 p-2">
        <span className="w-[10px] h-[10px] bg-primary rounded-full mt-[6px]" />

        <div>
          <p className="text-sm text-black font-medium flex-1">
            Your queue on the{" "}
            <span className="font-semibold">Astana Hub Event</span> comes up in 15
            minutes
          </p>
          <p className="text-sm text-gray-400 mt-1">2h ago</p>
        </div>
      </div>
    </div>
  );
};
