import { NavbarContextProvider } from "@/widgets/navbar";
import { QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";
import { queryClient } from "../api/apiClient";
import { AuthContextProvider } from "../context/auth-context/AuthContext";
import { AlertNotificationContextProvider } from "@/widgets/alert-notification";

const ProvidersLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <NavbarContextProvider>
          <AlertNotificationContextProvider>
            {children}
          </AlertNotificationContextProvider>
        </NavbarContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default ProvidersLayout;
