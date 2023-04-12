import { getAllEvents } from "@/shared/api/events/event.api";
import Banner from "@/shared/components/banner/Banner";
import { Layout } from "@/shared/layouts/Layout";
import { QueueEventList } from "@/widgets/event-cards";
import { useQuery } from "@tanstack/react-query";
import React, { FC } from "react";
import { OurOffer } from "./components/OurOffer";

interface HomeScreen {}

export const HomeScreen: FC<HomeScreen> = ({}) => {
  const { data } = useQuery({
    queryKey: ["recent-events"],
    queryFn: getAllEvents,
  });

  return (
    <Layout title="Home">
      <Banner />
      <QueueEventList className="mt-10" title="Recent Events" data={data} />
      <OurOffer />
      <QueueEventList className="mt-10" title="Popular Events" data={data} />
    </Layout>
  );
};
