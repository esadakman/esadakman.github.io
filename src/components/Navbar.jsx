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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // onClick={() => setMovies("")}
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">
        <IMG src={logo} alt="logo" />
        <p>{"<esad/>"}</p>
      </Logo>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <IMG src={logo} alt="logo" />
      </Hamburger>

      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="home#About">About Me</MenuLink>
        <MenuLink to="login">Projects</MenuLink>
        <MenuLink to="login">Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
