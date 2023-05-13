import { useAlertNotification } from "./context/AlertNotificationContext";

export const AlertNotification = () => {
  const { visible, currentAlert, text } = useAlertNotification();
  const { icon, color, iconColor } = currentAlert;

  return (
    <>
      {visible && (
        <div
          className="max-w-md absolute right-7 bottom-7 z-50  rounded-xl px-6 py-4
          flex items-center gap-x-4 border border-gray-200"
          style={{ backgroundColor: color }}
        >
          <div
            className="p-[2px] rounded-full flex items-center justify-center"
            style={{ backgroundColor: iconColor }}
          >
            {icon}
          </div>
          <p className="text-black text-sm truncate">{text}</p>
        </div>
      )}
    </>
  );
};
