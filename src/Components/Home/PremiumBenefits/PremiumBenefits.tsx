import React, { useEffect, useState } from "react";
import {
    Container,
    Content,
    ContentWrapper,
    Desc,
    Heading,
    SlideControls,
    Subtitle,
    SubtitleHeadingDesc,
} from "./styles";
import PremiumBenefit from "../PremiumBenefit/PremiumBenefit";
import AnimateOnVisible from "../../Global/AnimateOnVisible/AnimateOnVisible";
import { motion } from "framer-motion";

const benifits = [
    {
        icon: "/assets/money.webp",
        title: (
            <>
                Monetize
                <br /> your skill
            </>
        ),
        body: "Make money while you learn with Antern's opportunities to monetize your skills.",
    },
    {
        icon: "/assets/head.webp",
        title: "Production Grade Projects",
        body: "Gain real-world experience and build your unique portfolio with our production grade projects.",
    },
    {
        icon: "/assets/clipboard.webp",
        title: "Write your own research paper",
        body: "Take your learning to the next level with our opportunity to write and publish your own research paper.",
    },
    {
        icon: "/assets/knowledge.webp",
        title: "Assessments",
        body: "Enhance your learning experience with our comprehensive learning materials, including lecture notes, e-books, and assignments.",
    },
];

const PremiumBenefits = React.forwardRef<HTMLDivElement>(({}, ref) => {
    return (
        <Container ref={ref}>
            <AnimateOnVisible as={motion.div}>
                <SubtitleHeadingDesc>
                    <Subtitle>choose your course & start with antern</Subtitle>
                    <Heading>premium benefits</Heading>
                    <Desc>
                        Unlock your full potential with Antern's premium
                        benefits, including monetizing your skill and writing
                        your own research paper.
                    </Desc>
                </SubtitleHeadingDesc>
            </AnimateOnVisible>
            <ContentWrapper>
                <Content
                    as={motion.div}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    variants={{
                        offscreen: {
                            y: 300,
                        },
                        onscreen: {
                            y: 0,
                            transition: {
                                type: "ease-in",
                            },
                        },
                    }}
                >
                    {benifits.map(({ icon, title, body }, index) => (
                        <PremiumBenefit
                            key={index}
                            icon={icon}
                            title={title}
                            body={body}
                        />
                    ))}
                </Content>
            </ContentWrapper>
        </Container>
    );
});

export default React.memo(PremiumBenefits);
