import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import * as React from "react";

export const titleVariants = cva("font-heading", {
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

export type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps extends VariantProps<typeof titleVariants>, React.HTMLAttributes<HTMLHeadingElement> {
  as: HeadingTags;
  children: React.ReactNode;
}

const Title = ({ as: Tag, children, size, className, ...props }: TitleProps) => {
  const style = clsx(titleVariants({ size }), className);
  return (
    <Tag className={style} {...props}>
      {children}
    </Tag>
  );
};

export default Title;
