import React from "react";
import CourseHero from "../../Components/Course/Hero/Hero";
import Reviews from "../../Components/Course/Reviews/Reviews";
import { Container, Content } from "./styles";
import Instructor from "../../Components/Course/Instructor/Instructor";
import YourWayToGetSuccess from "../../Components/Course/YourWayToGetSuccess/YourWayToGetSuccess";
import Pricing from "../../Components/Course/Pricing/Pricing";
import FAQ from "../../Components/Course/FAQ/FAQ";
import YouGotCoveredEverything from "../../Components/Course/YouGotCoveredEverything/YouGotCoveredEverything";
import Prerequisites from "../../Components/Course/Prerequisites/Prerequisites";
import GetExclusiveBenefits from "../../Components/Course/GetExclusiveBenefits/GetExclusiveBenefits";

const Course = () => {
    return (
        <Container>
            <CourseHero />
            <Content>
                <GetExclusiveBenefits />
                <Prerequisites />
                <YourWayToGetSuccess />
                <Reviews />
                <YouGotCoveredEverything />
                <FAQ />
                <Instructor />
                <Pricing />
            </Content>
        </Container>
    );
};

export default Course;
