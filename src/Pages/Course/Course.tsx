import React from "react";
import AboutCourse from "../../Components/Course/AboutCourse/AboutCourse";
import Features from "../../Components/Course/Features/Features";
import CourseHero from "../../Components/Course/Hero/Hero";
import Reviews from "../../Components/Course/Reviews/Reviews";
import SkillsYouWillGain from "../../Components/Course/SkillsYouWillGain/SkillsYouWillGain";
import JoinOurCommunity from "../../Components/Courses/JoinOurCommunity/JoinOurCommunity";
import { Container, Content } from "./styles";
import Instructors from "../../Components/Course/Instructors/Instructors";
import ModuleContent from "../../Components/Course/ModuleContent/ModuleContent";
import WhatYouGetByEnrolling from "../../Components/Course/WhatYouGetByEnrolling/WhatYouGetByEnrolling";
import Requirements from "../../Components/Course/Requirements/Requirements";

const Course = () => {
    return (
        <Container>
            <CourseHero />
            <Features />
            <Content>
                <AboutCourse />
                <SkillsYouWillGain />
                <Requirements />
                <WhatYouGetByEnrolling />
                <Reviews />
                <Instructors />
            </Content>
        </Container>
    );
};

export default Course;
