"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "About", "Education", "Projects", "Contact Me"];
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 z-10 shadow-lg px-4 py-3"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img src="HLLogo.png" className="h-14" />
          <p className="font-bold text-inherit">&nbsp;HIRUSHA</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img src="HLLogo.png" className="h-14" />
          <p className="font-bold text-inherit">&nbsp;HIRUSHA</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#About" size="sm">
          About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#Skills" color="foreground" size="sm">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#Experience" size="sm">
          Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#Projects" size="sm">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#Contact" size="sm">
            Contact Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="https://github.com/hililk"
            target="_blank"
            variant="shadow"
            style={{ backgroundColor: "blueviolet" }}
          >
            <FaGithub size={18} />
            Github Profile
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {/* {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color={"foreground"} href="#home" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))} */}
        <Link className="w-full" color={"foreground"} href="#About" size="sm">
        About
        </Link>
        <Link className="w-full" color={"foreground"} href="#Skills" size="sm">
          Skills
        </Link>
        <Link
          className="w-full"
          color={"foreground"}
          href="#Experience"
          size="sm"
        >
          Experience
        </Link>
        <Link
          className="w-full"
          color={"foreground"}
          href="#Projects"
          size="sm"
        >
          Projects
        </Link>
        <Link className="w-full" color={"foreground"} href="#Contact" size="sm">
          Contact Me
        </Link>
        <Button
          className="flex items-center"
          as={Link}
          href="https://github.com/hililk"
          target="_blank"
          variant="shadow"
          style={{ backgroundColor: "blueviolet" }}
        >
          <FaGithub size={18} />
          Github Profile
        </Button>
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
