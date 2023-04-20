import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface DropdownProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  values: string[];
  placeholder?: string;
}

export function Dropdown({
  value,
  setValue,
  values,
  placeholder,
}: DropdownProps) {
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <select
      value={value}
      placeholder={placeholder}
      className="bg-transparent text-base font-medium"
      onChange={e => handleOnChange(e)}
    >
      {values.map(v => (
        <option key={v}>{v}</option>
      ))}
    </select>
  );

  // return (
  //   <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
  //     <Select placeholder="Sort By" value={value} onChange={handleChange} defaultValue={values[0]}>
  //       <MenuItem disabled value="">
  //         <em>Sorty By</em>
  //       </MenuItem>
  //       {values.map(v => (
  //         <MenuItem key={v} value={v}>
  //           {v}
  //         </MenuItem>
  //       ))}
  //     </Select>
  //   </FormControl>
  // );
}
