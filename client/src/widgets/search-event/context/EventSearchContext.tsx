import { eventMock } from "@/shared/mock/eventMock";
import { QueueEvent } from "@/shared/types/event-card/QueueEvent.type";
import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";

interface IEventSearchContext {
  data: QueueEvent[] | null;
  loading: boolean;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  onSearchSubmit: () => void;
  error: string;
}

export const SearchEventContext = createContext<IEventSearchContext>(
  {} as IEventSearchContext
);

export const SearchEventContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<QueueEvent[] | null>(null);
  const [error, setError] = useState("");

  const onSearchSubmit = async () => {
    try {
      setLoading(true);

      await new Promise((res, _) => {
        setTimeout(() => {
          res(setData(eventMock));
        }, 2000);
      });
    } catch (error) {
      setError(typeof error === "string" ? error : "");
    } finally {
      setLoading(false);
    }
  };

  const value: IEventSearchContext = useMemo(() => {
    return {
      searchValue,
      setSearchValue,
      loading,
      data,
      onSearchSubmit,
      error,
    };
  }, [data, error, loading, searchValue]);

  return (
    <SearchEventContext.Provider value={value}>
      {children}
    </SearchEventContext.Provider>
  );
};
