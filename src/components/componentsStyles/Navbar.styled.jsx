import styled from "styled-components";
import { Flex } from "../componentsStyles/Main.styled";
import { Link as ScrollLink } from "react-scroll";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export const Nav = styled(Flex)` 
  background: ${({ theme }) => theme.colors.transparent};;
  position: fixed;
  top: 0;
  z-index: 6;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  /* @media (max-width: ${({ theme }) => theme.size.lg}) {
    position: relative;
  } */
`;

export const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.Bloggy1};
  text-decoration: none;
  font-weight: 800;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.7rem 0;
  p {
    font-weight: 400;
    color: white;
    letter-spacing: 5px;
    margin: 0 0.7rem;
    transition: all 0.3s ease-in;
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      display: none;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.turqo};
    }
  }
`;

export const IMG = styled.img`
  width: 3rem;
  color: red;
  padding-left: 1rem;
  transition: all 0.3s ease-in;

  :hover {
    opacity: 0.7;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.turqo};
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    display: block;
  }
`;

export const Menu = styled(Flex).withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  margin-right: 1rem;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease-in;
    margin: 0;
  }
`;

export const MenuLink = styled(ScrollLink)`
  text-align: center;
  padding: 11px 8px;
  letter-spacing:1px;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  color: white;
  transition: all 0.5s ease-in-out;
  border-radius: 5px; 
  &:hover {
    /* background-color: ${({ theme }) => theme.colors.navBgColor}; */
    color: ${({ theme }) => theme.colors.turqo};
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    border-bottom: 1px solid white;
    width: 100%;
    border-radius: 5px;
    /* text-decoration: underline; */
  }
`;
