import { useContext } from "react";
import { SearchEventContext } from "../context/EventSearchContext";

export const useEventSearch = () => useContext(SearchEventContext);
