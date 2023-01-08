import React, { useContext } from "react";
import { Container, Content, Heading, Skill } from "./styles";
import { CourseContext } from "../../../Context/CourseContext";

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
    const courseDetails = useContext(CourseContext);

    if (!courseDetails) return null;

    return (
        <Container>
            <Heading>skills you will gain</Heading>
            <Content>
                {courseDetails.skillsYouWillGain.map((skill, index) => (
                    <Skill key={index}>{skill}</Skill>
                ))}
            </Content>
        </Container>
    );
};

export default SkillsYouWillGain;
