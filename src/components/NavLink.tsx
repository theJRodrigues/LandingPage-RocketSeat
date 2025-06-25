import { routes } from "@/constants/Routes";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavLinkProps extends React.ComponentProps<"a"> {
  route: keyof typeof routes;
  children: React.ReactNode;
  disableIsActive?: boolean;
}

function NavLink({ route, children, className, ...props }: NavLinkProps) {
  const router = useRouter();
  const path = routes[route];
  const isActive = (path: string) => {
    if (path === "/") {
      return path === router.pathname;
    }
    return router.pathname === path || router.pathname.startsWith(`${path}/`);
  };

  const style = clsx(
    "font-body text-action-sm hover:text-blue-100 active:text-blue-200",
    isActive(path) && "text-blue-200",
    className,
  );

  return (
    <Link href={path} className={style} {...props}>
      {children}
    </Link>
  );
}

export default NavLink;
