import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import {
    Container,
    Link,
    Links,
    Logo,
    NeedHelp,
    NeedHelpGetStarted,
} from "./styles";
import logo from "/assets/logo-white.svg";

const headerLinks = [
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

const Header = () => {
    return (
        <Container>
            <Logo src={logo} />
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
            <NeedHelpGetStarted>
                <NeedHelp>Need Help?</NeedHelp>
                <Button>Get started</Button>
            </NeedHelpGetStarted>
        </Container>
    );
};

export default Header;
