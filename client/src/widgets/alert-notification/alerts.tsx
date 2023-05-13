import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

export type AlertValue = {
  icon: JSX.Element;
  iconColor: string;
  color: string;
};

export type AlertTypes = "Warning" | "Error" | "Success";

type Alerts = {
  [key in AlertTypes]: AlertValue;
};

export const alerts: Alerts = {
  Warning: {
    icon: <PriorityHighRoundedIcon htmlColor="#fbfbfd" fontSize="small" />,
    iconColor: "#FFC12B",
    color: "#FFF9E9",
  },
  Error: {
    icon: <PriorityHighRoundedIcon htmlColor="#fbfbfd" fontSize="small" />,
    iconColor: "#E95064",
    color: "#FDEDEE",
  },
  Success: {
    icon: <DoneRoundedIcon htmlColor="#fbfbfd" fontSize="small" />,
    iconColor: "#3BCF9D",
    color: "#EBFBF6",
  },
} as const;
