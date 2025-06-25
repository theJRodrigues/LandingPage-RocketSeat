import * as React from "react";
import LogoLink from "./LogoLink";
import ActionLink from "./Link";
import { routes } from "@/constants/Routes";

const Footer = () => {
  const { terms, privacy, feedback } = routes;
  return (
    <footer className="py-3 px-[24px] bg-gray-500 ">
      <div className="max-w-116 m-auto flex  items-start md:items-center justify-between">
        <LogoLink />
        <nav className="flex flex-col gap-1 md:gap-3 md:flex-row md:items-center py-[8px]">
          <ActionLink href={terms}>Termos de Uso</ActionLink>
          <ActionLink href={privacy}>Política de Privacidade</ActionLink>
          <ActionLink href={feedback}>Enviar Feedback</ActionLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
