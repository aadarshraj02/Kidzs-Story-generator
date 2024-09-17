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

  return (
    <Navbar maxWidth="full">
      <NavbarContent>
        <NavbarBrand>
          <Image src={"/assets/logo.svg"} alt="logo" width={40} height={40} />
          <h2 className="font-bold text-2xl text-primary ml-3">
            Kidz's Stories
          </h2>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        {MenuList.map((item, index) => (
          <NavbarItem key={index}>
            <Link href={item.path} className="font-semibold px-4">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Button color="primary">Get Started</Button>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
