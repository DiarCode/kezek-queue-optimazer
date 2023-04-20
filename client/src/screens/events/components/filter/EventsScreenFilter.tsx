import { Dropdown } from "@/shared/components/ui/dropdown/Dropdown";
import { useState } from "react";
import SortRoundedIcon from "@mui/icons-material/SortRounded";

const mockOptions = ["Hello", "World"];

const EventsScreenFilter = () => {
  const [current, setCurrent] = useState(mockOptions[0]);

  return (
    <section className="flex items-center gap-x-2">
      <SortRoundedIcon fontSize="medium" />

      <Dropdown
        value={current}
        setValue={setCurrent}
        values={["Hello", "World"]}
        placeholder="Sort By"
      />
    </section>
  );
};

export default EventsScreenFilter;
