import { Layout } from "@/shared/layouts/Layout";
import { FC } from "react";
import Link from "next/link";
import { PAGES_LINKS } from "@/shared/config/pages-links/pages-links";
import { SignupForm } from "./components/SignupForm";

interface LoginProps {}

export const SignupScreen: FC<LoginProps> = ({}) => {
  return (
    <Layout
      title="Log In"
      showNavbar={false}
      containerized={false}
      className="p-0 bg-gradient-to-r from-[#1488CC] to-[#2B32B2]
        flex flex-col items-center justify-center overflow-hidden"
    >
      <main className="w-full sm:w-3/4 lg:w-1/4 bg-white p-7 rounded-xl">
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
    </Layout>
  );
};