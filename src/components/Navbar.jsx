import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  Hamburger,
  IMG,
  Logo,
  Menu,
  MenuLink,
  Nav,
} from "./componentsStyles/Navbar.styled";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">
        <IMG src={logo} alt="logo" />

        <p>{"<esad/>"}</p>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <IMG
          src={hamburger}
          alt="logo"
          style={{ paddingTop: "8px", width: "2.5rem", paddingRight: "1rem" }}
        />
      </Hamburger>

      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/#about" smooth={true}>About Me</MenuLink>
        <MenuLink to="/#projects" smooth={true}>Projects</MenuLink>
        <MenuLink to="/#contact" smooth={true}>Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
