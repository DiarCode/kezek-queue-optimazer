import { COLORS } from "@/shared/constants/colors";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  solid?: boolean;
}

export const Button = ({
  solid = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  const solidStyle = solid
    ? { backgroundColor: COLORS.primary, color: "white" }
    : {};

  const buttonClassName = `px-5 py-2 border-solid border-2 rounded-xl text-sm hover:bg-primary 
      hover:text-white transition-all duration-300 ${className} flex items-center justify-center `;

  return (
    <button
      {...props}
      className={buttonClassName}
      style={{
        borderColor: COLORS.primary,
        ...solidStyle,
      }}
    >
      {children}
    </button>
  );
};
