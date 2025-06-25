import React, { useState } from "react";
import Button from "./Button";
import NavLink from "./NavLink";
import LogoLink from "./LogoLink";
import { useRouter } from "next/router";
import { routes } from "@/constants/Routes";
import { Menu } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onClickNavigation = () => {
    router.push(routes.start);
  };

  const onClickMenuMobile = () => {
    setIsMobileMenuOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <header className=" py-3 bg-gray-800 border-b-2 border-gray-500 px-1 relative">
      <div className="max-w-116 m-auto flex  items-center justify-between ">
        <LogoLink />
        <div className="flex gap-[8px] md:gap-[24px] items-center">
          <Button variant="secondary" size="md" onClick={onClickNavigation}>
            Começar
          </Button>
          <button
            className="md:hidden bg-gray-400 h-fit p-[9.5px] rounded-full cursor-pointer"
            aria-label="Abrir menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={onClickMenuMobile}
          >
            <Menu size={20} className="text-white " />
          </button>
          <nav className="hidden md:flex text-white gap-[24px] items-center -order-1">
            <NavLink route="home">Home</NavLink>
            <NavLink route="blog">Blog</NavLink>
          </nav>

          <nav
            id="mobile-menu"
            className={`md:hidden backdrop-blur-md text-white rounded-bl-2xl border border-gray-400 flex flex-col gap-2  p-2 fixed top-10 -right-0 z-50  transition-transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <NavLink route="home" className="w-fit" onClick={onClickMenuMobile}>
              Home
            </NavLink>
            <NavLink route="blog" className="w-fit" onClick={onClickMenuMobile}>
              Blog
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
