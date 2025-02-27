"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const paths = [
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = (bool: boolean) => setIsOpen(bool);

  const isActive = (path: string) => path === pathname;
  const activeClass = (path: string) =>
    path === pathname ? "text-blue-600" : "foreground";

  return (
    <Navbar
      className="py-5"
      shouldHideOnScroll
      maxWidth="2xl"
      onMenuOpenChange={handleMenu}
      isMenuOpen={isOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Logo*/}
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <Link
            href="/"
            className={`font-bold text-2xl ${activeClass("/")}`}
            aria-current={isActive("/") ? "page" : false}
            onClick={() => handleMenu(false)}
          >
          SMRES
          </Link>
        </NavbarBrand>
        <NavbarItem className="ml-2">{/* // <ThemeSwitcher /> */}</NavbarItem>
      </NavbarContent>

      {/* Desktop Logo*/}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link
            href="/"
            className={`font-bold text-2xl ${activeClass("/")}`}
            aria-current={isActive("/") ? "page" : false}
          >
            SMRES
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop */}
      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        <NavbarItem>{/* <ThemeSwitcher /> */}</NavbarItem>
        {paths.map((p) => (
          <NavbarItem isActive={isActive(p.href)} key={p.name}>
            <Link
              href={p.href}
              aria-current={isActive(p.href) ? "page" : false}
              className={`text-2xl font-medium ${activeClass(p.href)}`}
            >
              {p.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile */}
      <NavbarMenu className="pt-14">
        {paths.map((p) => (
          <NavbarMenuItem isActive={isActive(p.href)} key={p.name}>
            <Link
              href={p.href}
              aria-current={isActive(p.href) ? "page" : false}
              className={`text-2xl mb-3 ${activeClass(p.href)}`}
              onClick={() => handleMenu(false)}
            >
              {p.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
