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
import { FaDiscord, FaTwitter } from "react-icons/fa";

const teamMembers = [
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
        position: "co-founder & ceo",
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
        position: "co-founder & ceo",
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
        position: "co-founder & ceo",
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
                        <TeamMember key={index}>
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
