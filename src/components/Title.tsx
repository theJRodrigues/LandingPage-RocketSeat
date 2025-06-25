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
type TitleProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & VariantProps<typeof titleVariants> &
  React.ComponentPropsWithoutRef<T>;

const Title = <T extends React.ElementType = "h1">({
  as,
  children,
  size,
  className,
  ...props
}: TitleProps<T>) => {
  const style = clsx(titleVariants({ size }), className);
  const Tag = as || "h1";
  return (
    <Tag className={style} {...props}>
      {children}
    </Tag>
  );
};

export default Title;
