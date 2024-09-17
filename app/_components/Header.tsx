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
          <Image src={""} alt="" />
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
