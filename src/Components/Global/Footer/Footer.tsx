import React from "react";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import {
    AboutCompany,
    AboutCompanyLinkSections,
    Background,
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
            {
                text: "privacy policy",
                to: "/privacy-policy",
            },
            {
                text: "cancelation policy",
                to: "/cancelation-policy",
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
        href: "https://mobile.twitter.com/anternteams/",
        icon: <BsTwitter />,
    },
    {
        href: "https://www.instagram.com/team.antern/",
        icon: <BsInstagram />,
    },
    {
        href: "https://www.youtube.com/c/neweraa/",
        icon: <BsYoutube />,
    },
    {
        href: "https://www.linkedin.com/company/team-antern/",
        icon: <FaLinkedinIn />,
    },
];

const Footer = () => {
    const { pathname } = useLocation();
    return (
        <Container
        // style={
        //     pathname === "/"
        //         ? {
        //               maxWidth: "115rem",
        //           }
        //         : { borderRadius: "0px" }
        // }
        >
            <Background />
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
                        {socialLinks.map(({ href, icon }, index) => (
                            <a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SocialLink>{icon}</SocialLink>
                            </a>
                        ))}
                    </SocialLinks>
                    <Copyright>&copy; Copyright Antern 2022</Copyright>
                    <Buttons>
                        <a href="mailto:team@antern.co">
                            <Button transparentBg>Need help?</Button>
                        </a>
                        <Button to="/courses">Get started</Button>
                    </Buttons>
                </SocialLinksCopyrightButtons>
            </Content>
        </Container>
    );
};

export default Footer;
