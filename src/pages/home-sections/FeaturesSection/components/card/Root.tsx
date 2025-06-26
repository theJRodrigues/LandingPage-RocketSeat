import clsx from "clsx";
import * as React from "react";
interface FrameProps extends React.ComponentProps<"article"> {
  children: React.ReactNode;
}

const CardRoot = ({ children, className, ...props }: FrameProps) => {
  return (
    <article className={clsx("p-2.5 md:p-[48px] bg-gray-500 rounded-2xl", className)} {...props}>
      {children}
    </article>
  );
};

export default CardRoot;
