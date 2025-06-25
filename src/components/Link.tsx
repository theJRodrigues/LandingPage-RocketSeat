import clsx from "clsx";
import Link from "next/link";
import * as React from "react";

interface ActionLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode;
}

const ActionLink = ({ href, children, className, ...props }: ActionLinkProps) => {
  const style = clsx("font-body text-body-sm text-blue-100 hover:text-blue-200", className);
  return (
    <Link href={href} className={style} {...props}>
      {children}
    </Link>
  );
};

export default ActionLink;
