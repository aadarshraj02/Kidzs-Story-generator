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
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
