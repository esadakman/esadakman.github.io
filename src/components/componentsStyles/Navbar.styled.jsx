import styled from "styled-components";
import { Flex } from "../componentsStyles/Main.styled";
import { Link as ScrollLink } from "react-scroll";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export const Nav = styled(Flex)`
  background: ${({ theme }) => theme.colors.navGlass};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: fixed;
  top: 0;
  z-index: 6;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  transition: background 0.4s ease, border-color 0.4s ease;
`;

export const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 800;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.7rem 0;
  p {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: 4px;
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

export const ThemeToggle = styled.button`
  display: grid;
  place-items: center;
  width: 2.6rem;
  height: 2.6rem;
  margin: 0 0.5rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.turqo};
    border-color: ${({ theme }) => theme.colors.turqo};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.colors.glow};
  }

  @media (max-width: ${({ theme }) => theme.size.sm}) {
    position: absolute;
    right: 4.5rem;
    top: 0.55rem;
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
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.35s ease-in-out;
  border-radius: 5px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 4px;
    height: 2px;
    background: ${({ theme }) => theme.colors.turqo};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.turqo};
  }
  &:hover::after {
    transform: scaleX(1);
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    width: 100%;
    border-radius: 5px;
  }
`;
