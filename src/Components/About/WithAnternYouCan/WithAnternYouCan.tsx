import React from "react";
import {
    Card,
    CardDesc,
    CardHeading,
    CardIcon,
    Container,
    ContainerWrapper,
    Content,
    Heading,
} from "./styles";
import { AiOutlineLaptop, AiOutlineTeam } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { GiBrainFreeze } from "react-icons/gi";
import { motion } from "framer-motion";

const cards = [
    {
        icon: <AiOutlineLaptop />,
        heading: "online learning",
        desc: "Choose a Study Space Works Best For You, 100% online.",
    },
    {
        icon: <AiOutlineTeam />,
        heading: "a powerful support team",
        desc: " You've Got a Whole Community Behind you and We're Committed To Your New Career.",
    },
    {
        icon: <BsChatDots />,
        heading: "ThinkChat",
        desc: "Our Subject matter Experts Are On Hand TO Answer Questions Via Live Chat While You Study.",
    },
    {
        icon: <GiBrainFreeze />,
        heading: "free programs available",
        desc: "Try Our Free Tier Of Courses And See For Yourself. We're Committed To Your New Career",
    },
];

const WithAnternYouCan = () => {
    return (
        <ContainerWrapper>
            <Container>
                <Heading>With Antern,You Can</Heading>
                <Content>
                    {cards.map(({ icon, heading, desc }, index) => (
                        <Card
                            key={index}
                            as={motion.div}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                duration: 0.3,
                                delay: 0.1 * (index + 1),
                            }}
                            variants={{
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transform: `translateX(0px)`,
                                },
                                hidden: {
                                    opacity: 0,
                                    scale: 0,
                                    transform: `translateX(${
                                        30 * (index + 1) * -2
                                    }px)`,
                                },
                            }}
                        >
                            <CardIcon>{icon}</CardIcon>
                            <CardHeading>{heading}</CardHeading>
                            <CardDesc>{desc}</CardDesc>
                        </Card>
                    ))}
                </Content>
            </Container>
        </ContainerWrapper>
    );
};

export default WithAnternYouCan;
