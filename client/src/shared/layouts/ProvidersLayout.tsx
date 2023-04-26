import { NavbarContextProvider } from "@/widgets/navbar";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { FC, PropsWithChildren } from "react";
import { queryClient } from "../api/apiClient";
import { AuthContextProvider } from "../context/auth-context/AuthContext";

const ProvidersLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
        <NavbarContextProvider>{children}</NavbarContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default ProvidersLayout;
