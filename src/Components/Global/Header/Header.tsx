import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import {
    Container,
    HamMenuButton,
    Link,
    Links,
    Logo,
    NeedHelp,
    NeedHelpGetStarted,
    Notification,
    NotificationLink,
    NotificationText,
    Wrapper,
} from "./styles";
import logo from "/assets/logo-white.svg";
import { AiOutlineMenu } from "react-icons/ai";
import HamMenu from "../HamMenu/HamMenu";
import { BsChevronRight } from "react-icons/bs";

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
    {
        to: "/contact-us",
        text: "contact us",
    },
];

interface HeaderProps {
    style?: React.CSSProperties;
    wrapperStyle?: React.CSSProperties;
}

interface NotificationType {
    text: string;
    link?: {
        text: string;
        to: string;
    };
}

const Header = ({ style = {}, wrapperStyle = {} }: HeaderProps) => {
    const { pathname } = useLocation();
    const [showHamMenu, setShowHamMenu] = useState(false);
    const [notification, setNotification] = useState<NotificationType | null>(
        null
    );
    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.antern.co/notification");
            if (response.status === 200) setNotification(await response.json());
        })();
    }, []);
    return (
        <Wrapper style={wrapperStyle}>
            {notification && pathname === "/" && (
                <Notification>
                    <NotificationText>{notification.text}</NotificationText>
                    {notification.link && (
                        <NotificationLink href={notification.link.to}>
                            {notification.link.text} <BsChevronRight />
                        </NotificationLink>
                    )}
                </Notification>
            )}
            {showHamMenu && (
                <HamMenu closeHamMenu={() => setShowHamMenu(false)} />
            )}
            <Container style={style}>
                <NavLink
                    to="/"
                    style={{ display: "flex", alignItems: "center" }}
                >
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
                    {pathname !== "/courses" && pathname !== "/courses/" && (
                        <Button to="/courses">Get started</Button>
                    )}
                </NeedHelpGetStarted>
            </Container>
        </Wrapper>
    );
};

export default Header;
