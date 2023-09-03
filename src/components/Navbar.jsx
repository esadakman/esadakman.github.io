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
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const scrollToWithOffset = (target, offset) => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      const element = document.getElementById(target);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }, 50);
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
        <MenuLink smooth={true} onClick={() => scrollToWithOffset("about", 69)}>
          About Me
        </MenuLink>
        <MenuLink
          smooth={true}
          onClick={() => scrollToWithOffset("projects", 69)}
        >
          Projects
        </MenuLink>
        <MenuLink
          smooth={true}
          onClick={() => scrollToWithOffset("contact", 69)}
        >
          Contact
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
