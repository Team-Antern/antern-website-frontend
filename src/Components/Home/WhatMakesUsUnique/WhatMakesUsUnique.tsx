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
        icon: "/assets/teaching-assistants.webp",
        title: "AI Powered Teaching Assistants",
        desc: "24x7 AI TA support by adapting your learning ",
    },
    {
        icon: "/assets/handwritten-lecture-notes.webp",
        title: "Handwritten Lecture Notes",
        desc: "Enhance your learning experience with Antern's unique handwritten lecture materials",
    },
    {
        icon: "/assets/doubt-resolution.webp",
        title: "1-1 Doubt Resolution",
        desc: "Get personalized support with Antern's 1-1 doubt resolution feature.",
    },
    {
        icon: "/assets/hybrid-learning-format.webp",
        title: "Hybrid Learning Format",
        desc: "Experience the best of both worlds with Antern's hybrid format of live and self-paced instruction.",
    },
    {
        icon: "/assets/micro-learning-programs.webp",
        title: "Micro-Learning Programs",
        desc: "Achieve more in less time with Antern's micro-learning programs.",
    },
    {
        icon: "/assets/assesments.webp",
        title: "Assessments",
        desc: "Track your progress and stay on track with Antern's comprehensive assessments",
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
                    to="/courses"
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
