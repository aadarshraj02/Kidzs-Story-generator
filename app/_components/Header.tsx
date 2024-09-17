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

const Header = () => {
  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>
          <Image src={"/assets/logo.svg"} alt="logo" width={40} height={40} />
          <h2 className="font-bold text-2xl text-primary ml-3">
            Kidz's Stories
          </h2>
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
