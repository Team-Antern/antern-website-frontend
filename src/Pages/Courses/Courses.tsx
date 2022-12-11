import React from "react";
import CoursesPagination from "../../Components/Courses/CoursesPagination/CoursesPagination";
import FilterSorts from "../../Components/Courses/FilterSorts/FilterSorts";
import CoursesHero from "../../Components/Courses/Hero/Hero";
import JoinOurCommunity from "../../Components/Courses/JoinOurCommunity/JoinOurCommunity";
import { Container, Content } from "./styles";

const Courses = () => {
    return (
        <Container>
            <CoursesHero />
            <FilterSorts />
            <Content>
                <CoursesPagination />
                <JoinOurCommunity />
            </Content>
        </Container>
    );
};

export default Courses;
