import { Navbar } from "@/widgets/navbar";
import Head from "next/head";
import { CSSProperties, FC, HTMLAttributes, PropsWithChildren } from "react";
import { AlertNotification } from "@/widgets/alert-notification";

interface LayoutProps extends PropsWithChildren {
  title: string;
  description?: string;
  className?: string;
  showNavbar?: boolean;
  containerized?: boolean;
  style?: CSSProperties;
}

export const Layout: FC<LayoutProps> = ({
  children,
  title,
  description,
  className,
  showNavbar = true,
  containerized = true,
  style = {},
}) => {
  const titleText = `${title} - KEZEK`;

  const renderedDescription = description ? (
    <meta name="description" content={description} />
  ) : (
    <meta name="robots" content="noindex"></meta>
  );

  return (
    <div className="bg-white">
      <Head>
        <title>{titleText}</title>
        <meta name="Keywords" content="words, learn, remember, cards" />
        {renderedDescription}
      </Head>

      <main
        className={`w-screen min-h-screen relative overflow-clip bg-white font-montserrat text-sm sm:text-base 
          mx-auto px-3 pb-10 ${containerized && "container"} ${className}`}
        style={style}
      >
        {showNavbar && <Navbar />}
        {children}
      </main>

      <AlertNotification />
    </div>
  );
};
