import { useRouter } from "next/router";

export const useParams = (param: string): string | undefined => {
  const { query } = useRouter();

  const value = param in query ? (query[param] as string) : undefined;
  return value;
};
