import React from "react";
import {
  Container,
  Content,
  Desc,
  Heading,
  OurMissionCard,
  OurMissionCardDesc,
  OurMissionCardHeading,
  OurMissionCardIcon,
  OurMissionCardStack,
  OurMissionCardStacks,
  Right,
} from "./styles";
import { FaRegLightbulb } from "react-icons/fa";
import { ImFire, ImBooks } from "react-icons/im";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { motion } from "framer-motion";
import AnimateOnVisible from "../../Global/AnimateOnVisible/AnimateOnVisible";

const ourMissionCardStacks = [
  [
    {
      icon: <FaRegLightbulb />,
      heading: "Innovative Edtech Solutions for All",
      desc: "Democratizing education through tech and affordability, empowering learners to reach their full potential.",
    },
    {
      icon: <ImFire />,
      heading: "Cutting-Edge Courses at an Affordable Price",
      desc: "Transforming education through technology and affordability, expanding access to knowledge and opportunity.",
    },
  ],
  [
    {
      icon: <MdOutlineMoneyOffCsred />,
      heading: "Education for All, Without Breaking the Bank",
      desc: "Democratizing education through tech and affordability, providing education for all at an affordable price.",
    },
    {
      icon: <ImBooks />,
      heading: "Empowering Learners with High-Quality Edtech",
      desc: "Transforming education through technology and affordability, expanding access to knowledge and opportunity",
    },
  ],
];

const OurMission = () => {
  const fadeInFromLeftToRight = {
    visible: { opacity: 1, left: 0 },
    hidden: { opacity: 0, left: 100 },
  };

  return (
    <Container>
      <Content>
        <OurMissionCardStacks>
          {ourMissionCardStacks.map((cardStack, index) => (
            <OurMissionCardStack key={index}>
              {cardStack.map(({ icon, heading, desc }, card_index) => (
                <OurMissionCard
                  key={card_index}
                  as={motion.div}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    duration: 0.1 * (card_index + index + 1),
                    delay: 0.15 * (card_index + index + 1),
                  }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                >
                  <OurMissionCardIcon>{icon}</OurMissionCardIcon>
                  <OurMissionCardHeading>{heading}</OurMissionCardHeading>
                  <OurMissionCardDesc>{desc}</OurMissionCardDesc>
                </OurMissionCard>
              ))}
            </OurMissionCardStack>
          ))}
        </OurMissionCardStacks>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
          transition={{
            duration: 0.7,
          }}
          variants={{
            visible: { opacity: 1, transform: `translateX(0px)` },
            hidden: { opacity: 0, transform: `translateX(100px)` },
          }}
        >
          <Heading>our mission</Heading>
          <Desc>
            We are democratizing education through tech and affordability,
            empowering learners with high-quality edtech solutions and
            cutting-edge courses at an affordable price, for all.
          </Desc>
        </motion.div>
      </Content>
    </Container>
  );
};

export default OurMission;
