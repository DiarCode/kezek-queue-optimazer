import Banner from "@/shared/components/banner/Banner";
import { Layout } from "@/shared/layouts/Layout";
import React, { FC } from "react";

interface HomeScreen {}

export const HomeScreen: FC<HomeScreen> = ({}) => {
  return <Layout title="Home">
    <Banner />
  </Layout>;
};
