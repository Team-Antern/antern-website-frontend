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
    return (
        <Container>
            <Content>
                <OurMissionCardStacks>
                    {ourMissionCardStacks.map((cardStack, index) => (
                        <OurMissionCardStack key={index}>
                            {cardStack.map(({ icon, heading, desc }, index) => (
                                <OurMissionCard key={index}>
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
                            ))}
                        </OurMissionCardStack>
                    ))}
                </OurMissionCardStacks>
                <Right>
                    <Heading>our mission</Heading>
                    <Desc>
                        Our mission is to train the world’s workforce in the
                        careers of the future.
                    </Desc>
                </Right>
            </Content>
        </Container>
    );
};

export default OurMission;
