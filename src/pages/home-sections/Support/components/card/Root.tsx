import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import * as React from "react";

const cardVariants = cva("p-2.5 rounded-xl w-full max-w-36 md:max-w-30", {
  variants: {
    color: {
      blue: "bg-blue-400",
      cyan: "bg-cyan-300",
    },
  },
  defaultVariants: {
    color: "blue",
  },
});

interface SupportCardProps
  extends Omit<React.ComponentProps<"article">, "color">,
    VariantProps<typeof cardVariants> {
  children: React.ReactNode;
}

const CardRoot = ({ children, color, className, ...props }: SupportCardProps) => {
  return (
    <article className={clsx(cardVariants({ color, className }))} {...props}>
      {children}
    </article>
  );
};

export default CardRoot;
