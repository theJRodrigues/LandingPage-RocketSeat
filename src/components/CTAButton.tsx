import * as React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
interface CTAButtonProps extends React.ComponentProps<"button"> {
  className?: string;
}

const CTAButton = ({ className, ...props }: CTAButtonProps) => {
  return (
    <Button
      variant="primary"
      size={"lg"}
      className={clsx("flex gap-1 items-center w-fit", className)}
      {...props}
    >
      Criar loja grátis <ArrowRight />
    </Button>
  );
};

export default CTAButton;
