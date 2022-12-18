import React from "react";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import {
    AboutCompany,
    AboutCompanyLinkSections,
    Buttons,
    CompanyDesc,
    CompanyLogo,
    Container,
    Content,
    Copyright,
    Link,
    LinkSection,
    LinkSectionHeading,
    LinkSectionLinks,
    LinkSections,
    SocialLink,
    SocialLinks,
    SocialLinksCopyrightButtons,
} from "./styles";

const linkSections = [
    {
        heading: "company",
        links: [
            {
                text: "home",
                to: "/",
            },
            {
                text: "about us",
                to: "/about-us",
            },
            {
                text: "courses",
                to: "/courses",
            },
            {
                text: "terms & conditions",
                to: "/terms-and-conditions",
            },
        ],
    },
    {
        heading: "courses",
        links: [
            {
                text: "CS001B03",
                to: "/courses/cs001b03",
            },
            {
                text: "CS001B03",
                to: "/courses/cs001b03",
            },
        ],
    },
];

const socialLinks = [
    {
        to: "https://www.twitter.com/",
        icon: <BsTwitter />,
    },
    {
        to: "https://www.instagram.com/",
        icon: <BsInstagram />,
    },
    {
        to: "https://www.youtube.com/",
        icon: <BsYoutube />,
    },
    {
        to: "https://www.linkedin.com/",
        icon: <FaLinkedinIn />,
    },
];

const Footer = () => {
    return (
        <Container>
            <Content>
                <AboutCompanyLinkSections>
                    <AboutCompany>
                        <NavLink to="/">
                            <CompanyLogo src="/assets/logo-white.svg" />
                        </NavLink>
                        <CompanyDesc>
                            Antern is where lifelong learners come to learn the
                            skills they need, to land the jobs they want, to
                            build the lives they deserve.
                        </CompanyDesc>
                    </AboutCompany>
                    <LinkSections>
                        {linkSections.map(({ heading, links }, index) => (
                            <LinkSection key={index}>
                                <LinkSectionHeading>
                                    {heading}
                                </LinkSectionHeading>
                                <LinkSectionLinks>
                                    {links.map(({ to, text }, index) => (
                                        <Link key={index}>
                                            <NavLink to={to}>{text}</NavLink>
                                        </Link>
                                    ))}
                                </LinkSectionLinks>
                            </LinkSection>
                        ))}
                    </LinkSections>
                </AboutCompanyLinkSections>
                <SocialLinksCopyrightButtons>
                    <SocialLinks>
                        {socialLinks.map(({ to, icon }, index) => (
                            <NavLink key={index} to={to}>
                                <SocialLink>{icon}</SocialLink>
                            </NavLink>
                        ))}
                    </SocialLinks>
                    <Copyright>&copy; Copyright Antern 2022</Copyright>
                    <Buttons>
                        <Button transparentBg>Need help?</Button>
                        <Button>Get started</Button>
                    </Buttons>
                </SocialLinksCopyrightButtons>
            </Content>
        </Container>
    );
};

export default Footer;
