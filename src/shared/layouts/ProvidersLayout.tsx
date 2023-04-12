import { NavbarContextProvider } from "@/widgets/navbar";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { FC, PropsWithChildren } from "react";
import { queryClient } from "../api/apiClient";

const ProvidersLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavbarContextProvider>{children}</NavbarContextProvider>
    </QueryClientProvider>
  );
};

export default ProvidersLayout;
