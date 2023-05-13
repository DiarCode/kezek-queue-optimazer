import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { AlertTypes, alerts, AlertValue } from "../alerts";

interface IAlertNotificationContext {
  showAlert: (text: string, alert: AlertTypes) => void;
  visible: boolean;
  currentAlert: AlertValue;
  text: string;
}

const AlertNotificationContext = createContext<IAlertNotificationContext>(
  {} as IAlertNotificationContext
);

const VISIBLE_SHOW_TIME = 5000;
const DEFAULT_ALERT = alerts.Success;

export const AlertNotificationContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);
  const [currentAlert, setCurrentAlert] = useState<AlertValue>(DEFAULT_ALERT);

  const showAlert = (text: string, alertKey: AlertTypes) => {
    const alert = alerts[alertKey];
    setCurrentAlert(alert);
    setText(text);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
      setCurrentAlert(DEFAULT_ALERT);
      setText("");
    }, VISIBLE_SHOW_TIME);
  };

  const value: IAlertNotificationContext = useMemo(() => {
    return {
      showAlert: showAlert,
      visible: visible,
      currentAlert: currentAlert,
      text: text,
    };
  }, [currentAlert, text, visible]);

  return (
    <AlertNotificationContext.Provider value={value}>
      {children}
    </AlertNotificationContext.Provider>
  );
};

export const useAlertNotification = () => useContext(AlertNotificationContext);
