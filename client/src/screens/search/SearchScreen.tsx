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
          <h1 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">
            Use the form to find Event
          </h1>

          <SearchInput />

          <SearchEventsList />
        </div>
      </Layout>
    </SearchEventContextProvider>
  );
};
