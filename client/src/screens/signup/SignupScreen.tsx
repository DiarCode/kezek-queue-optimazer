import { Layout } from "@/shared/layouts/Layout";
import { FC } from "react";
import Link from "next/link";
import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import { SignupForm } from "./components/SignupForm";
import Image from "next/image";
import { Logo } from "@/shared/components/logo/Logo";
import { COLORS } from "@/shared/constants/colors";
import { AuthBanner } from "@/shared/components/banner/AuthBanner";

interface LoginProps {}

const SIGNUP_IMAGE_URL =
  "https://images.unsplash.com/photo-1456574808786-d2ba7a6aa654?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644&q=80";
export const SignupScreen: FC<LoginProps> = ({}) => {
  return (
    <Layout
      title="Sign Up"
      showNavbar={false}
      containerized={false}
      className="bg-white grid grid-cols-2 grid-flow-row"
      style={{ padding: 0 }}
    >
      <AuthBanner src={SIGNUP_IMAGE_URL} />

      <div className="col-span-2 sm:col-span-1 w-full p-3 flex flex-col items-center justify-center">
        <main className="w-full lg:w-1/2 sm:p-3 bg-white">
          <p className="text-lg sm:text-2xl font-semibold mb-7 text-center">
            Registration
          </p>

          <SignupForm />

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
