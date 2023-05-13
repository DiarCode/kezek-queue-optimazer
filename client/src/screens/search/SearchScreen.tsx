import { Title } from "@/shared/components/ui/title/Title";
import { Layout } from "@/shared/layouts/Layout";
import {
  SearchEventContextProvider,
  SearchEventsList,
  SearchInput,
} from "@/widgets/search-event";

export const SearchScreen = () => {
  return (
    <SearchEventContextProvider>
      <Layout title="Search" description="Find your favorite events in Kezek">
        <div className="flex flex-col items-center mt-0 sm:mt-6">
          <Title content="Use the form to find Event" className="mb-3 md:mb-4" centered />

          <SearchInput />

          <SearchEventsList />
        </div>
      </Layout>
    </SearchEventContextProvider>
  );
};
