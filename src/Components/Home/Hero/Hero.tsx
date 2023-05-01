import React, { useEffect, useRef } from "react";
import {
    BestQualityCourses,
    Container,
    Content,
    Desc,
    Heading,
    HeadingLetter,
    LeftArt,
    NumberOfReviews,
    People,
    Peoples,
    Rating,
    Reviews,
    ReviewsContent,
    ReviewsPageArrow,
    RightArt,
} from "./styles";
import Button from "../../Global/Button/Button";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import WavyText from "../WavyText/WavyText";
import { Variants, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
// @ts-ignore
import Typewriter from "typewriter-effect/dist/core";

const peoples = [
    "https://media.licdn.com/dms/image/C4E03AQG5aubzbhBJyQ/profile-displayphoto-shrink_800_800/0/1611205900848?e=1677110400&v=beta&t=9Mkh-9lYSV2EvAASFglpCWIp9aRE4DrDTuH7ccnSXaw",
    "https://media.licdn.com/dms/image/D4D03AQEC7NXN2_XGug/profile-displayphoto-shrink_800_800/0/1665493308669?e=1677110400&v=beta&t=C275PLXYsOKhisp_bAouPsQL6oCqqZqumiDC-EaQzRo",
    "https://media.licdn.com/dms/image/D4D03AQEpT24Chl9tmQ/profile-displayphoto-shrink_800_800/0/1661498124962?e=1677110400&v=beta&t=aGeymncjOoqUz0oXtIrU8G15pT3j-A7ylA6boPVR4j0",
    "https://media.licdn.com/dms/image/C4E03AQG5aubzbhBJyQ/profile-displayphoto-shrink_800_800/0/1611205900848?e=1677110400&v=beta&t=9Mkh-9lYSV2EvAASFglpCWIp9aRE4DrDTuH7ccnSXaw",
    "https://media.licdn.com/dms/image/D4D03AQEC7NXN2_XGug/profile-displayphoto-shrink_800_800/0/1665493308669?e=1677110400&v=beta&t=C275PLXYsOKhisp_bAouPsQL6oCqqZqumiDC-EaQzRo",
];

const container: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: (i: number = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.05 },
    }),
};

const child: Variants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200,
        },
    },
    hidden: {
        opacity: 0,
        y: 20,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200,
        },
    },
};

const HomeHero = React.forwardRef<HTMLDivElement>(({}, ref) => {
    const headingRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (headingRef.current) {
            const typewriter = new Typewriter(headingRef.current, {
                loop: true,
                delay: 75,
                cursor: "",
            });

            typewriter
                .typeString(
                    "Build your <span style='color: #4df3a3;'>future</span>"
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                    "Get your first <span style='color: #4df3a3;'>paycheck</span>"
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                    "Get your first <span style='color: #4df3a3;'>job</span>"
                )
                .pauseFor(1000)
                .start();
        }
    }, []);
    return (
        <Container ref={ref}>
            <Content>
                <BestQualityCourses>best quality courses</BestQualityCourses>
                <Heading
                    as={motion.div}
                    style={{ display: "flex", overflow: "hidden" }}
                    variants={container}
                    ref={headingRef}
                    initial="hidden"
                    animate="visible"
                >
                    {/* <TypeAnimation
                        sequence={[
                            "Build your future",
                            1000,
                            "Get your first pay check",
                            1000,
                            "Get your first job",
                            1000,
                        ]}
                        cursor={true}
                        repeat={Infinity}
                        // style={{
                        //     fontWeight: 400,
                        //     fontSize: "1.8rem",
                        //     lineHeight: "150%",
                        //     color: "rgba(222, 227, 236, 0.5)",
                        //     position: "absolute",
                        //     width: "100%",
                        // }}
                    /> */}
                    {/* <span>
                        {Array.from("build your ").map((letter, index) => (
                            <HeadingLetter
                                as={motion.span}
                                key={index}
                                green={index > 10}
                                variants={child}
                            >
                                {letter === " " ? <>&nbsp;</> : letter}
                            </HeadingLetter>
                        ))}
                    </span>
                    <span>
                        {Array.from("future").map((letter, index) => (
                            <HeadingLetter
                                as={motion.span}
                                key={index}
                                green={11 + index > 10}
                                variants={child}
                            >
                                {letter === " " ? <>&nbsp;</> : letter}
                            </HeadingLetter>
                        ))}
                    </span> */}
                </Heading>
                <Desc
                    as={motion.div}
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 2,
                        delay: 1,
                    }}
                >
                    With top educators, engaging video lessons, and personalised
                    learning journeys, we're here to help you succeed.
                </Desc>
                <Button
                    to="/courses"
                    style={{
                        display: "inline-block",
                        padding: "16px 48px",
                    }}
                    animationProps={{
                        as: motion.div,
                        initial: {
                            opacity: 0,
                            scale: 0.5,
                        },
                        whileHover: {
                            scale: 1.1,
                        },
                        whileTap: {
                            scale: 0.8,
                        },
                        animate: {
                            scale: 1,
                            opacity: 1,
                        },
                        transition: {
                            default: {
                                duration: 0.2,
                                delay: 1,
                            },
                            scale: {
                                delay: 0,
                            },
                        },
                    }}
                >
                    Get started
                </Button>
                {/* <Reviews>
                    <Peoples>
                        {peoples.map((people, index) => (
                            <People key={index} index={index} src={people} />
                        ))}
                    </Peoples>
                    <ReviewsContent>
                        <Rating>4.9</Rating>
                        <NumberOfReviews>(627.06 review)</NumberOfReviews>
                        <NavLink to="/about">
                            <ReviewsPageArrow>
                                <BsArrowRight />
                            </ReviewsPageArrow>
                        </NavLink>
                    </ReviewsContent>
                </Reviews> */}
                <LeftArt />
                <RightArt />
            </Content>
        </Container>
    );
});

export default React.memo(HomeHero);
