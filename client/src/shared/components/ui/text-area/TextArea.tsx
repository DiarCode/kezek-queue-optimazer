import { InputHTMLAttributes, forwardRef } from "react";
import { Label } from "../label/Label";

interface TextAreaFieldProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  error?: string;
}

const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ label, required, error, ...props }, ref) => {
    const isError = Boolean(error);

    return (
      <div>
        {label && <Label text={label} required={required} className="mb-2" />}
        <textarea
          ref={ref}
          {...props}
          className="w-full min-h-[34px] bg-gray-100 rounded-lg px-4 py-1 
            border-solid border-2 border-gray-200 placeholder:text-sm"
        />
        {isError && <p className="text-xs text-red-500 mt-[6px]">{error}</p>}
      </div>
    );
  }
);

TextAreaField.displayName = "TextAreaField";
export { TextAreaField };
