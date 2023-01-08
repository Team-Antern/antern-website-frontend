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
import { motion } from "framer-motion";
import AnimateOnVisible from "../../Global/AnimateOnVisible/AnimateOnVisible";

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

const WhatMakesUsUnique = React.forwardRef<HTMLDivElement>(({}, ref) => {
    return (
        <Container ref={ref}>
            <HeadingDescGetStarted>
                <AnimateOnVisible as={motion.div}>
                    <Heading>what makes us unique?</Heading>
                </AnimateOnVisible>
                <AnimateOnVisible viewport={{ once: true }} as={motion.div}>
                    <Desc>
                        The potential to educate at a global scale was
                        awe-inspiring, and Antern was founded to pursue a
                        mission to democratize education and learn this courses
                    </Desc>
                </AnimateOnVisible>
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
});

export default React.memo(WhatMakesUsUnique);
