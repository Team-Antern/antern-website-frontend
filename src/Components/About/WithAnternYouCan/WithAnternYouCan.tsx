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

const WithAnternYouCan = () => {
    const cards = [
        {
            icon: <AiOutlineLaptop />,
            heading: "online learning",
            desc: "Choose a Study Space Works Best For You. 100% oneline.",
        },
        {
            icon: <AiOutlineTeam />,
            heading: "a powerful support team",
            desc: "You’ve Got a Whole Community Bhhind You,And We’re Connitted To Your New Career.",
        },
        {
            icon: <BsChatDots />,
            heading: "ThinkChat",
            desc: "Our Subject matter Experts Are On Hand To Answer Questions Via Live Chat While You Study.",
        },
        {
            icon: <GiBrainFreeze />,
            heading: "free programs available",
            desc: "Try Our Free Tier Of Courses And See For Yourself.We’re Connitted To Your New Career",
        },
    ];
    return (
        <ContainerWrapper>
            <Container>
                <Heading>With Antern,You Can</Heading>
                <Content>
                    {cards.map(({ icon, heading, desc }, index) => (
                        <Card key={index}>
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
