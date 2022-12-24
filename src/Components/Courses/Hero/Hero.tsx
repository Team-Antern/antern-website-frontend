import React, { useRef } from "react";
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

interface CoursesHeroProps {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const CoursesHero = ({ searchValue, setSearchValue }: CoursesHeroProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
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
                    <InputContainer onClick={() => inputRef.current?.focus()}>
                        <Input
                            ref={inputRef}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="What do you want to learn today?"
                        />
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
