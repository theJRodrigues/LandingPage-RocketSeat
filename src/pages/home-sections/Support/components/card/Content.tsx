import clsx from "clsx";
import * as React from "react";

interface CardContentProps extends React.ComponentProps<"p"> {
  children: React.ReactNode;
}

const CardContent = ({ children, className, ...props }: CardContentProps) => {
  return (
    <p className={clsx("font-body text-body-sm text-gray-200", className)} {...props}>
      {children}
    </p>
  );
};

export default CardContent;
