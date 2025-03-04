"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="shadow-md">
      {/* Tombol Toggle untuk Mobile */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Logo */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <NextLink href="/" className="flex items-center gap-3">
            <img src="/img/bazma.png" alt="Bazma Logo" className="w-[80px] h-auto object-contain" />
            <img src="/img/upz.png" alt="UPZ Logo" className="w-[80px] h-auto object-contain" />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Navigasi Tengah (Desktop) */}
      <NavbarContent className="hidden sm:flex flex-grow justify-center">
        <ul className="flex gap-4">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  "text-sm font-medium transition-colors hover:text-primary",
                  "data-[active=true]:text-primary"
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Tombol Login Donatur */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="text-sm rounded-full font-normal text-white bg-red-600"
            href={siteConfig.links.sponsor}
            variant="flat"
          >
            Login Donatur
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Menu Navigasi (Mobile) */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                href={item.href}
                size="lg"
                className={index === 2 ? "text-primary" : "text-foreground"}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
