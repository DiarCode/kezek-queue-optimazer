import { FlatList } from "@/shared/components/flat-list/FlatList";
import { useEventSearch } from "../hooks/useEventSearch";
import { QueueEventItem } from "@/widgets/event-cards";
import { Spinner } from "@/shared/components/spinner/Spinner";

export const SearchEventsList = () => {
  const { data, loading } = useEventSearch();
  console.log(loading);

  return (
    <>
      {loading ? (
        <div className="text-xl font-bold">
          <Spinner />
        </div>
      ) : (
        <FlatList
          data={data || []}
          cb={item => <QueueEventItem key={item.id} data={item} />}
        />
      )}
    </>
  );
};
