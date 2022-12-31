import React, { useEffect, useState } from "react";
import CoursesPagination from "../../Components/Courses/CoursesPagination/CoursesPagination";
import FilterSorts from "../../Components/Courses/FilterSorts/FilterSorts";
import CoursesHero from "../../Components/Courses/Hero/Hero";
import JoinOurCommunity from "../../Components/Courses/JoinOurCommunity/JoinOurCommunity";
import { Container, Content } from "./styles";

export interface Course {
    id: string;
    isLive: boolean;
    title: string;
    instructor: {
        name: string;
        profilePic: string;
    };
    courseBanner: string;
    rating: number;
    duration: string;
}

const Courses = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        fetch("https://api.npoint.io/b47a93aad13d58160aad")
            .then((response) => response.json())
            .then((data) => {
                setCourses(data);
            });
    }, []);
    return (
        <Container>
            <CoursesHero
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            {/* <FilterSorts /> */}
            <Content>
                {/* <CoursesPagination
                    courses={courses.filter((course) =>
                        course.title.includes(searchValue)
                    )}
                /> */}
                {/* <JoinOurCommunity /> */}
            </Content>
        </Container>
    );
};

export default Courses;
