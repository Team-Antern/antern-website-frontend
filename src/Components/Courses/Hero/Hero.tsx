import React, { useRef, useState } from "react";
import BreadCrumbs from "../../Global/BreadCrumbs/BreadCrumbs";
import Header from "../../Global/Header/Header";
import {
    Code,
    Container,
    Content,
    Discount,
    ELearning,
    Heading,
    HeroMain,
    Input,
    InputContainer,
    InputIcon,
    Rocket,
    Stats,
} from "./styles";
import { FiSearch } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

interface CoursesHeroProps {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const CoursesHero = ({ searchValue, setSearchValue }: CoursesHeroProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputFocused, setInputFocused] = useState(false);
    return (
        <Container>
            <Content>
                <Header />
                <HeroMain>
                    <BreadCrumbs
                        path={[
                            {
                                to: "/",
                                text: "home",
                            },
                            {
                                to: "/courses",
                                text: "courses",
                            },
                        ]}
                    />
                    <Heading>Boost your skills with antern</Heading>
                    <InputContainer
                        onClick={() => {
                            if (inputRef.current) {
                                inputRef.current.focus();
                                setInputFocused(true);
                            }
                        }}
                    >
                        <Input
                            ref={inputRef}
                            onBlur={() => setInputFocused(false)}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        {!inputFocused && (
                            <TypeAnimation
                                sequence={[
                                    "What do you want to learn today?",
                                    1000,
                                    "Web Development",
                                    1000,
                                    "AR/VR",
                                    2000,
                                    "Machine Learning",
                                ]}
                                cursor={true}
                                repeat={Infinity}
                                style={{
                                    fontWeight: 400,
                                    fontSize: "1.8rem",
                                    lineHeight: "150%",
                                    color: "rgba(222, 227, 236, 0.5)",
                                    position: "absolute",
                                    width: "100%",
                                }}
                            />
                        )}
                        <InputIcon>
                            <FiSearch />
                        </InputIcon>
                    </InputContainer>
                    <Stats>
                        <span>600+ Learners.</span>
                        <span>3Years.</span>
                        <span>100% Free Courses</span>
                    </Stats>
                </HeroMain>
                <Rocket />
                <Discount />
                <ELearning />
                <Code />
            </Content>
        </Container>
    );
};

export default CoursesHero;
