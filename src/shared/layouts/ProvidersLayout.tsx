import { NavbarContextProvider } from "@/widgets/navbar";
import React, { FC, PropsWithChildren } from "react";

const ProvidersLayout: FC<PropsWithChildren> = ({ children }) => {
  return <NavbarContextProvider>{children}</NavbarContextProvider>;
};

export default ProvidersLayout;
