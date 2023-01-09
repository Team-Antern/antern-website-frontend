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
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "tushar vaswani",
    socials: [
      {
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/tushar-vaswani-457aa3157/",
      },
    ],
    profilePic: "/assets/tusharvaswani.png",
    position: "co-founder & engineering manager",
  },
  {
    name: "ayush singh",
    socials: [
      {
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/ayush-singh488/",
      },
      {
        icon: <FaTwitter />,
        link: "https://twitter.com/AySh2218",
      },
    ],
    profilePic: "/assets/ayushsingh.png",
    position: "co-founder & CEO",
  },
  {
    name: "priyanshu bhattacharjee",
    socials: [
      {
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/priyanshu-bhattacharjee/",
      },
    ],
    profilePic: "/assets/priyanshubhattacharjee.png",
    position: "co-founder & CTO",
  },
];

const OurLeadershipTeam = () => {
  return (
    <Container>
      <Heading
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        meet our leadership team
      </Heading>
      <Desc
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        Out talented team of executives have come together with one goal: to
        help students, companies for the next generation of technical jobs.
      </Desc>
      <Content>
        {teamMembers.map(({ profilePic, socials, name, position }, index) => {
          let y = 100;

          if (index % 2 == 0) {
            y *= -1;
          }

          return (
            <TeamMember
              key={index}
              as={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                duration: 0.2 * (index + 1),
                delay: 0.15 * (index + 1),
              }}
              variants={{
                visible: {
                  opacity: 1,
                  transform: `translateY(0px)`,
                },
                hidden: {
                  opacity: 0,
                  transform: `translateY(${y}px)`,
                },
              }}
            >
              <TeamMemberProfilePic src={profilePic} />
              <TeamMemberDetails top={(index + 1) % 2 === 0}>
                <TeamMemberSocials>
                  {socials.map(({ link, icon }, index) => (
                    <TeamMemberSocial href={link} target="_blank" key={index}>
                      {icon}
                    </TeamMemberSocial>
                  ))}
                </TeamMemberSocials>
                <TeamMemberName>{name}</TeamMemberName>
                <TeamMemberPosition>{position}</TeamMemberPosition>
              </TeamMemberDetails>
            </TeamMember>
          );
        })}
      </Content>
    </Container>
  );
};

export default OurLeadershipTeam;
