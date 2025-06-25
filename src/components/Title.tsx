import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import * as React from "react";

const titleVariants = cva("font-heading", {
  variants: {
    size: {
      hg: "text-heading-hg",
      xl: "text-heading-xl",
      lg: "text-heading-lg",
      md: "text-heading-md",
      sm: "text-heading-sm",
      xs: "text-heading-xs",
    },
  },
});
interface TitleProps extends React.ComponentProps<"h1">, VariantProps<typeof titleVariants> {
  children: React.ReactNode;
}
const Title = ({ children, size, className, ...props }: TitleProps) => {
  const style = clsx(titleVariants({ size }), className);
  return (
    <h1 className={style} {...props}>
      {children}
    </h1>
  );
};

export default Title;
