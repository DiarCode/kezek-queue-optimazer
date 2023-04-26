import { AuthContext } from "@/shared/context/auth-context/AuthContext";
import { useContext } from "react";

export const useAuth = () => useContext(AuthContext);
