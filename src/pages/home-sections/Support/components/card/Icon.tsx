import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import * as React from "react";

const iconVariants = cva("p-[8px] rounded-lg w-fit", {
  variants: {
    color: {
      blue: "bg-blue-330",
      cyan: "bg-cyan-200",
    },
  },
  defaultVariants: {
    color: "blue",
  },
});

interface CardIconProps
  extends Omit<React.ComponentProps<"div">, "color">,
    VariantProps<typeof iconVariants> {
  Icon: LucideIcon;
}

const CardIcon = ({ Icon, color, className }: CardIconProps) => {
  return (
    <div className={clsx(iconVariants({ color }), className)}>
      {<Icon size={20} className="text-white" />}
    </div>
  );
};

export default CardIcon;
