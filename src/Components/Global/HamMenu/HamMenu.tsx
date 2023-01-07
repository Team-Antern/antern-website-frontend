import React, { useEffect } from "react";
import {
    CloseButton,
    Container,
    HamMenuLink,
    HamMenuLinks,
    Logo,
    LogoCloseButton,
} from "./styles";
import { IoMdClose } from "react-icons/io";
import Button from "../Button/Button";
import { headerLinks } from "../Header/Header";
import { NavLink } from "react-router-dom";

interface HamMenuProps {
    closeHamMenu: () => void;
}

const HamMenu = ({ closeHamMenu }: HamMenuProps) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);
    return (
        <Container>
            <LogoCloseButton>
                <Logo src="/assets/logo-white.svg" />
                <CloseButton onClick={closeHamMenu}>
                    <IoMdClose />
                </CloseButton>
            </LogoCloseButton>
            <HamMenuLinks>
                {headerLinks.map(({ to, text }, index) => (
                    <NavLink key={index} to={to}>
                        {({ isActive }) => (
                            <HamMenuLink isActive={isActive}>
                                {text}
                            </HamMenuLink>
                        )}
                    </NavLink>
                ))}
            </HamMenuLinks>
            <Button>Get Started</Button>
        </Container>
    );
};

export default HamMenu;
