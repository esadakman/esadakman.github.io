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
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

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
        <MenuLink
          to="/#about"
          smooth={true}
          scroll={(el) => scrollWithOffset(el, 40)}
        >
          About Me
        </MenuLink>
        <MenuLink
          to="/#projects"
          smooth={true}
          scroll={(el) => scrollWithOffset(el, 69)}
        >
          Projects
        </MenuLink>
        <MenuLink
          to="/#contact"
          smooth={true}
          scroll={(el) => scrollWithOffset(el, 69)}
        >
          Contact
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
