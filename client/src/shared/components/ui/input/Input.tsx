import { FC, InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputField: FC<InputFieldProps> = props => {
  return (
    <input
      {...props}
      className="w-full min-h-[34px] bg-gray-100 rounded-lg px-4 py-1 
    border-solid border-2 border-gray-200 placeholder:text-sm"
    />
  );
};
