import { useContext } from "react";
import { NavbarContext } from "../context/NavbarConextProvider";

export const useNavbar = () => useContext(NavbarContext);
