import React from "react";
import { Container, Content, Heading, Skill } from "./styles";

const skills = [
    "data science",
    "lecture notes",
    "mock interviews",
    "freelancing gigs",
    "python programming",
    "data analysis",
    "methodology",
    "github",
    "big data",
    "data science",
    "data mining",
];

const SkillsYouWillGain = () => {
    return (
        <Container>
            <Heading>skills you will gain</Heading>
            <Content>
                {skills.map((skill, index) => (
                    <Skill key={index}>{skill}</Skill>
                ))}
            </Content>
        </Container>
    );
};

export default SkillsYouWillGain;
