import { FlatList } from "@/shared/components/flat-list/FlatList";
import { useEventSearch } from "../hooks/useEventSearch";
import { EventItem } from "@/widgets/event-cards";
import { Spinner } from "@/shared/components/spinner/Spinner";

export const SearchEventsList = () => {
  const { data, loading } = useEventSearch();

  return (
    <>
      {loading ? (
        <div className="text-xl font-bold">
          <Spinner />
        </div>
      ) : (
        <FlatList
          data={data || []}
          cb={item => <EventItem key={item.id} data={item} />}
        />
      )}
    </>
  );
};
