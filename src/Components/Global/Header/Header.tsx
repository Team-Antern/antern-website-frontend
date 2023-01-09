import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import {
  Container,
  HamMenuButton,
  Link,
  Links,
  Logo,
  NeedHelp,
  NeedHelpGetStarted,
  Wrapper,
} from "./styles";
import logo from "/assets/logo-white.svg";
import { AiOutlineMenu } from "react-icons/ai";
import HamMenu from "../HamMenu/HamMenu";
import { motion } from "framer-motion";

export const headerLinks = [
  {
    to: "/",
    text: "home",
  },
  {
    to: "/courses",
    text: "courses",
  },
  {
    to: "/about-us",
    text: "about us",
  },
];

interface HeaderProps {
  style?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}

const Header = ({ style = {}, wrapperStyle = {} }: HeaderProps) => {
  const [showHamMenu, setShowHamMenu] = useState(false);
  return (
    <Wrapper style={wrapperStyle}>
      {showHamMenu && <HamMenu closeHamMenu={() => setShowHamMenu(false)} />}
      <Container style={style}>
        <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
          <Logo src={logo} />
        </NavLink>
        <Links>
          {headerLinks.map(({ to, text }, index) => (
            <NavLink key={index} to={to}>
              {({ isActive }) => (
                <Link isActive={isActive}>
                  <span>{text}</span>
                </Link>
              )}
            </NavLink>
          ))}
        </Links>
        <HamMenuButton onClick={() => setShowHamMenu(true)}>
          <AiOutlineMenu />
        </HamMenuButton>
        <NeedHelpGetStarted>
          <NeedHelp href="mailto:team@antern.co">Need Help?</NeedHelp>
          <Button to="/courses">Get started</Button>
        </NeedHelpGetStarted>
      </Container>
    </Wrapper>
  );
};

export default Header;
