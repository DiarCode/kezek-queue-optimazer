import { Layout } from "@/shared/layouts/Layout";
import { FC } from "react";
import { LoginForm } from "./components/LoginForm";
import Link from "next/link";
import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import Image from "next/image";
import { Logo } from "@/shared/components/logo/Logo";
import { COLORS } from "@/shared/constants/colors";

interface LoginProps {}

const LOGIN_IMAGE_URL =
  "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

export const LoginScreen: FC<LoginProps> = ({}) => {
  return (
    <Layout
      title="Log In"
      showNavbar={false}
      containerized={false}
      className="bg-gray-100 grid grid-cols-2 grid-flow-row p-0"
    >
      <div
        className="hidden sm:block w-full h-full col-span-1
        relative"
      >
        <Image
          alt="login"
          className="object-cover"
          fill
          priority
          src={LOGIN_IMAGE_URL}
        />

        <div className="absolute top-10 left-10 w-1/3">
          <Logo size="large" color={COLORS.primary} />
          <p className="mt-6">
            The modern way to save your time just in one app
          </p>
        </div>
      </div>

      <div className="col-span-2 sm:col-span-1 w-full p-3 flex flex-col items-center justify-center">
        <main className="w-full lg:w-1/2 p-7 bg-white">
          <p className="text-lg sm:text-2xl font-semibold mb-7 text-center">
            Welcome Back
          </p>

          <LoginForm />

          <div className="flex justify-center mt-4">
            <Link
              href={PAGES_LINKS.Home.link}
              className="text-gray-400 underline text-sm"
            >
              Return Home
            </Link>
          </div>
        </main>
      </div>
    </Layout>
  );
};
