import React, { useContext, useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import { LoadingContext } from "../../Context/LoadingContext";

const Course = () => {
    const { id } = useParams();
    const [courseDetails, setCourseDetails] = useState();
    const [, startApiCall, finishApiCall] = useContext(LoadingContext);
    console.log(courseDetails);
    useEffect(() => {
        startApiCall && startApiCall();
        fetch(`https://api.npoint.io/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setCourseDetails(data);
                finishApiCall && finishApiCall();
            });
    }, []);
    if (!courseDetails) return null;
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
                <Requirements />
                <WhatYouGetByEnrolling />
                <Reviews />
                <Instructors />
            </Content>
        </Container>
    );
};

export default Course;
