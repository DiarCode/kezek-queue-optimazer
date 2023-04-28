import { ChangeEvent } from "react";
import { useEventSearch } from "../hooks/useEventSearch";
import SearchIcon from "@mui/icons-material/Search";
import { COLORS } from "@/shared/constants/colors";

export const SearchInput = () => {
  const { searchValue, setSearchValue, onSearchSubmit, loading } =
    useEventSearch();

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="w-full flex justify-center gap-x-2 sm:gap-x-4 mb-6 sm:mb-10">
      <input
        value={searchValue}
        onChange={onSearchInputChange}
        placeholder="Search"
        className="bg-white border-2 border-slate-200 w-full md:w-2/5 
   outline-none px-4 py-[6px] rounded-xl"
      />
      <button
        className={`bg-primary px-3 py-2 rounded-xl
          ${loading && "bg-gray-200"}`}
        onClick={onSearchSubmit}
        disabled={loading}
      >
        <SearchIcon fontSize="medium" htmlColor={COLORS.white} />
      </button>
    </div>
  );
};
