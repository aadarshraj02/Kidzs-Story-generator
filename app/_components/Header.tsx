"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const MenuList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Create Story",
      path: "/create-story",
    },
    {
      name: "Explore Stories",
      path: "/explore-stories",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isSignedIn } = useUser();

  return (
    <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <Image
            src={"/assets/logo.svg"}
            alt="logo"
            width={40}
            height={40}
            className="hidden  lg:flex"
          />
          <h2 className="font-bold text-2xl text-primary ml-3">
            Kidz's Stories
          </h2>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="hidden lg:flex">
        {MenuList.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={item.path}
              className="font-semibold px-4 text-primary hover:underline transition-all ease-linear duration-200"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Link href={"/dashboard"}>
          <Button color="primary">
            {isSignedIn ? "Dashboard" : "Get Started"}
          </Button>
        </Link>
        <UserButton />
      </NavbarContent>
      <NavbarMenu className="lg:hidden">
        {MenuList.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link href={item.path}>{item.name}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
