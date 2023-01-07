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
import { FaPhotoVideo } from "react-icons/fa";
import { Variants, motion } from "framer-motion";
import AnimateOnVisible from "../../Global/AnimateOnVisible/AnimateOnVisible";

const ourMissionCardStacks = [
    [
        {
            icon: <FaPhotoVideo />,
            heading: "high quality videos",
            desc: "Sed yt perpicuatis unde omnis isteurs error sit volu.",
        },
        {
            icon: <FaPhotoVideo />,
            heading: "high quality videos",
            desc: "Sed yt perpicuatis unde omnis isteurs error sit volu.",
        },
    ],
    [
        {
            icon: <FaPhotoVideo />,
            heading: "high quality videos",
            desc: "Sed yt perpicuatis unde omnis isteurs error sit volu.",
        },
        {
            icon: <FaPhotoVideo />,
            heading: "high quality videos",
            desc: "Sed yt perpicuatis unde omnis isteurs error sit volu.",
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
                            {cardStack.map(
                                ({ icon, heading, desc }, card_index) => (
                                    <OurMissionCard
                                        key={card_index}
                                        as={motion.div}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            duration:
                                                0.1 * (card_index + index + 1),
                                            delay:
                                                0.15 * (card_index + index + 1),
                                        }}
                                        variants={{
                                            visible: { opacity: 1, scale: 1 },
                                            hidden: { opacity: 0, scale: 0 },
                                        }}
                                    >
                                        <OurMissionCardIcon>
                                            {icon}
                                        </OurMissionCardIcon>
                                        <OurMissionCardHeading>
                                            {heading}
                                        </OurMissionCardHeading>
                                        <OurMissionCardDesc>
                                            {desc}
                                        </OurMissionCardDesc>
                                    </OurMissionCard>
                                )
                            )}
                        </OurMissionCardStack>
                    ))}
                </OurMissionCardStacks>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
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
                        Our mission is to train the world’s workforce in the
                        careers of the future.
                    </Desc>
                </motion.div>
            </Content>
        </Container>
    );
};

export default OurMission;
