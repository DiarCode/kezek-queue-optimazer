import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();
export const API_URL = process.env.API_URL || "localhost:8080";

