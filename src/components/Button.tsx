import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import * as React from "react";

const buttonVariants = cva(
  "font-body cursor-pointer whitespace-nowrap rounded-full transition-all outline-none",
  {
    variants: {
      variant: {
        primary: "text-gray-100 bg-blue-330 hover:bg-blue-200",
        secondary: "text-gray-800 bg-gray-100 hover:bg-blue-100",
      },
      size: {
        lg: "py-[12px] px-2 text-action-md",
        md: "py-[9.5px] px-[16px] text-action-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);

interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}
const Button = ({ children, variant, size, className, ...props }: ButtonProps) => {
  const style = clsx(buttonVariants({ variant, size }), className);
  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
};

export default Button;
