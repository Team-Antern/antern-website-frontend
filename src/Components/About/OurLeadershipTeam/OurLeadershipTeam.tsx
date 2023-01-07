import React from "react";
import {
    Container,
    Content,
    Desc,
    Heading,
    TeamMember,
    TeamMemberDetails,
    TeamMemberName,
    TeamMemberPosition,
    TeamMemberProfilePic,
    TeamMemberSocial,
    TeamMemberSocials,
} from "./styles";
import { Variants, motion } from "framer-motion";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const teamMembers = [
    {
        name: "tushar vaswani",
        socials: [
            {
                icon: <FaDiscord />,
                link: "https://discord.com/",
            },
            {
                icon: <FaTwitter />,
                link: "https://twitter.com/",
            },
        ],
        profilePic: "/assets/tusharvaswani.png",
        position: "co-founder & engineering manager",
    },
    {
        name: "ayush singh",
        socials: [
            {
                icon: <FaDiscord />,
                link: "https://discord.com/",
            },
            {
                icon: <FaTwitter />,
                link: "https://twitter.com/",
            },
        ],
        profilePic: "/assets/ayushsingh.png",
        position: "co-founder & CEO",
    },
    {
        name: "priyanshu bhattacharjee",
        socials: [
            {
                icon: <FaDiscord />,
                link: "https://discord.com/",
            },
            {
                icon: <FaTwitter />,
                link: "https://twitter.com/",
            },
        ],
        profilePic: "/assets/priyanshubhattacharjee.png",
        position: "co-founder & CTO",
    },
];

const OurLeadershipTeam = () => {
    return (
        <Container>
            <Heading>meet our leadership team</Heading>
            <Desc>
                Out talented team of executives have come together with one
                goal: to help students, companies for the next generation of
                technical jobs.
            </Desc>
            <Content>
                {teamMembers.map(
                    ({ profilePic, socials, name, position }, index) => (
                        <TeamMember
                            key={index}
                            as={motion.div}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                            }}
                            variants={{
                                visible: {
                                    opacity: 1,
                                    transform: `translateX(0px)`,
                                },
                                hidden: {
                                    opacity: 0,
                                    transform: `translateX(100px)`,
                                },
                            }}
                        >
                            <TeamMemberProfilePic src={profilePic} />
                            <TeamMemberDetails top={(index + 1) % 2 === 0}>
                                <TeamMemberSocials>
                                    {socials.map(({ link, icon }, index) => (
                                        <TeamMemberSocial
                                            href={link}
                                            target="_blank"
                                            key={index}
                                        >
                                            {icon}
                                        </TeamMemberSocial>
                                    ))}
                                </TeamMemberSocials>
                                <TeamMemberName>{name}</TeamMemberName>
                                <TeamMemberPosition>
                                    {position}
                                </TeamMemberPosition>
                            </TeamMemberDetails>
                        </TeamMember>
                    )
                )}
            </Content>
        </Container>
    );
};

export default OurLeadershipTeam;
