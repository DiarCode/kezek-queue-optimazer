import { motion } from "framer-motion";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";
import AppShortcutOutlinedIcon from "@mui/icons-material/AppShortcutOutlined";
import { COLORS } from "@/shared/constants/colors";

const offerIcons = [
  {
    title: "User-friendly experience",
    icon: (
      <AccessibilityNewOutlinedIcon
        className="w-12 h-12"
        htmlColor={COLORS.primary_light}
      />
    ),
    text: "High accecability and user experience in one app",
  },
  {
    title: "Safe your time",
    icon: (
      <AlarmOutlinedIcon
        className="w-12 h-12 "
        htmlColor={COLORS.primary_light}
      />
    ),
    text: "Don't waste time waiting in real life queue",
  },
  {
    title: "Just use your devices",
    icon: (
      <AppShortcutOutlinedIcon
        className="w-12 h-12"
        htmlColor={COLORS.primary_light}
      />
    ),
    text: "Use any device you wish, and get in queue online",
  },
];

export const OurOffer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="w-full bg-gray-100 bg-opacity-80 py-8 rounded-xl mt-8 flex flex-col items-center justify-center"
    >
      <p className="text-sm text-gray-500">Benefits for you</p>
      <h1 className="mt-3 font-bold text-5xl text-primary">Our Offer</h1>
      <p className="mt-5 text-center text-gray-500 text-sm">
        Mission of KEZEK is to make your life easier in
        <br />
        boring queues with digital and modern approach
      </p>

      <div className="mt-7 flex items-center justify-center flex-wrap sm:flex-nowrap gap-x-5">
        {offerIcons.map(item => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-start w-full sm:w-1/4 p-5"
          >
            <div>{item.icon}</div>
            <p className="text-center mt-6 font-semibold">{item.title}</p>
            <p className="text-center mt-2 text-gray-500 text-sm">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
