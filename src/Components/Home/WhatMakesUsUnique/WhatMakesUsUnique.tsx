import React from "react";
import {
    Container,
    Content,
    Desc,
    Heading,
    HeadingDescGetStarted,
} from "./styles";
import Button from "../../Global/Button/Button";
import WhatMakesUsUniqueCard from "../WhatMakesUsUniqueCard/WhatMakesUsUniqueCard";

const whatMakesUsUniqueCards = [
    {
        bg: "/assets/handwritten.jpg",
        title: "AI powered teaching assistants",
        desc: "In-depth well established content which will make someone job ready.",
    },
    {
        bg: "/assets/handwritten.jpg",
        title: "AI powered teaching assistants",
        desc: "In-depth well established content which will make someone job ready.",
    },
    {
        bg: "/assets/handwritten.jpg",
        title: "AI powered teaching assistants",
        desc: "In-depth well established content which will make someone job ready.",
    },
    {
        bg: "/assets/handwritten.jpg",
        title: "AI powered teaching assistants",
        desc: "In-depth well established content which will make someone job ready.",
    },
    {
        bg: "/assets/handwritten.jpg",
        title: "AI powered teaching assistants",
        desc: "In-depth well established content which will make someone job ready.",
    },
    {
        bg: "/assets/handwritten.jpg",
        title: "AI powered teaching assistants",
        desc: "In-depth well established content which will make someone job ready.",
    },
];

const WhatMakesUsUnique = () => {
    return (
        <Container>
            <HeadingDescGetStarted>
                <Heading>what makes us unique?</Heading>
                <Desc>
                    The potential to educate at a global scale was
                    awe-inspiring, and Antern was founded to pursue a mission to
                    democratize education and learn this courses
                </Desc>
                <Button
                    style={{
                        padding: "1.6rem 4rem",
                        fontWeight: 500,
                        lineHeight: "140%",
                        color: "#101C26",
                        display: "inline-block",
                    }}
                >
                    Get started
                </Button>
            </HeadingDescGetStarted>
            <Content>
                {whatMakesUsUniqueCards.map((whatMakesUsUniqueCard, index) => (
                    <WhatMakesUsUniqueCard
                        key={index}
                        {...whatMakesUsUniqueCard}
                        number={index + 1}
                    />
                ))}
            </Content>
        </Container>
    );
};

export default WhatMakesUsUnique;
