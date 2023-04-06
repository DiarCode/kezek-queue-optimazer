import { Navbar } from "@/widgets/navbar";
import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  title: string;
  description?: string;
  className?: string;
  showNavbar?: boolean;
  containerized?: boolean;
}

export const Layout: FC<LayoutProps> = ({
  children,
  title,
  description,
  className,
  showNavbar = true,
  containerized = true,
}) => {
  const titleText = `${title} - KEZEK`;
  const renderedDescription = description ? (
    <meta name="description" content={description} />
  ) : (
    <meta name="robots" content="noindex"></meta>
  );

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <meta name="Keywords" content="words, learn, remember, cards" />
        {renderedDescription}
      </Head>

      <main
        className={`w-screen h-screen overflow-y-hidden font-montserrat text-sm sm:text-base mx-auto px-3 ${
          containerized && "container"
        } ${className}`}
      >
        {showNavbar && <Navbar />}
        {children}
      </main>
    </>
  );
};
