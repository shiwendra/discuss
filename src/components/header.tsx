import Link from "next/link";
import * as actions from "@/actions";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  popover,
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@nextui-org/react";
import HaederAuth from "@/components/header-auth";
export default async function Header() {
  return (
    <div>
      <Navbar className="shadow mb-8">
        <NavbarBrand>
          <Link href="/" className="font-bold">
            Discussion Board
          </Link>
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavbarItem>
            <Input />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <HaederAuth />
        </NavbarContent>
      </Navbar>
    </div>
  );
}
