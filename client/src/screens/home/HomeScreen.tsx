import { getAllEvents } from "@/shared/api/events/event.api";
import { HomeBanner } from "@/shared/components/banner/HomeBanner";
import { Layout } from "@/shared/layouts/Layout";
import { EventList } from "@/widgets/event-cards";
import { useQuery } from "@tanstack/react-query";
import { OurOffer } from "./components/OurOffer";

export const HomeScreen = () => {
  const { data } = useQuery({
    queryKey: ["recent-events"],
    queryFn: getAllEvents,
  });

  return (
    <Layout title="Home">
      <HomeBanner />
      <EventList className="mt-10" title="Recent Events" data={data} />
      <OurOffer />
      <EventList className="mt-10" title="Popular Events" data={data} />
    </Layout>
  );
};
