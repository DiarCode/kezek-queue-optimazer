import ProvidersLayout from "@/shared/layouts/ProvidersLayout";
import "@/shared/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProvidersLayout>
      <Component {...pageProps} />
    </ProvidersLayout>
  );
}
