import { getAllEvents } from "@/shared/api/events/event.api";
import Banner from "@/shared/components/banner/Banner";
import { Layout } from "@/shared/layouts/Layout";
import { EventList } from "@/widgets/event-cards";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
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
      <EventList className="mt-10" title="Recent Events" data={data} />
      <OurOffer />
      <EventList className="mt-10" title="Popular Events" data={data} />
    </Layout>
  );
};
