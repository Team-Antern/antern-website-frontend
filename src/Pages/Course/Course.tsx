import React from "react";
import AboutCourse from "../../Components/Course/AboutCourse/AboutCourse";
import Features from "../../Components/Course/Features/Features";
import CourseHero from "../../Components/Course/Hero/Hero";
import Reviews from "../../Components/Course/Reviews/Reviews";
import SkillsYouWillGain from "../../Components/Course/SkillsYouWillGain/SkillsYouWillGain";
import JoinOurCommunity from "../../Components/Courses/JoinOurCommunity/JoinOurCommunity";
import { Container, Content } from "./styles";

const Course = () => {
    return (
        <Container>
            <CourseHero />
            <Features
                data={[
                    {
                        heading: "6 month",
                        desc: "Under 10 hours of study week",
                    },
                    {
                        heading: "english",
                        desc: "Subtites: English",
                    },
                    {
                        heading: "beginner",
                        desc: "No prior experience required",
                    },
                    {
                        heading: "100% self-paced",
                        desc: "Learn on your own time",
                    },
                ]}
            />
            <Content>
                <AboutCourse />
                <SkillsYouWillGain />
                <Reviews />
                <JoinOurCommunity />
            </Content>
        </Container>
    );
};

export default Course;
