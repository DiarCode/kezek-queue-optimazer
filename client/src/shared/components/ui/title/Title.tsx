import { FC, HTMLAttributes } from "react";

interface TitleProps {
  content: string;
  style?: HTMLAttributes<HTMLHeadingElement>;
  centered?: boolean;
  className?: string;
}

export const Title: FC<TitleProps> = ({
  centered,
  content,
  style,
  className,
}) => {
  return (
    <h1
      className={`${className} text-lg md:text-2xl font-bold`}
      style={{ ...style, textAlign: centered ? "center" : "start" }}
    >
      {content}
    </h1>
  );
};
