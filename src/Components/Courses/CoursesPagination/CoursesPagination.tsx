import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import {
    Container,
    Content,
    Heading,
    Pagination,
    PaginationBackwardForward,
    PaginationPage,
    PaginationPages,
} from "./styles";
import { BsFillTriangleFill } from "react-icons/bs";
import { Course as CourseInterface } from "../../../Pages/Courses/Courses";

interface CoursesPaginationProps {
    courses: CourseInterface[];
}

const CoursesPagination = ({ courses }: CoursesPaginationProps) => {
    const [totalPages, setTotalPages] = useState(0);
    const [activePage, setActivePage] = useState(0);
    useEffect(() => setTotalPages(Math.ceil(courses.length / 6)), [courses]);
    return (
        <Container>
            <Heading>Courses By Antern</Heading>
            <Content>
                {courses
                    .slice(activePage * 6, (activePage + 1) * 6)
                    .map((course, index) => {
                        return <Course key={index} {...course} />;
                    })}
            </Content>
            <Pagination>
                <PaginationBackwardForward
                    backward
                    isDisabled={activePage === 0}
                    onClick={() =>
                        activePage !== 0 && setActivePage((prev) => prev - 1)
                    }
                >
                    <BsFillTriangleFill />
                </PaginationBackwardForward>
                <PaginationPages>
                    {(() => {
                        const paginationPages = [];
                        for (let i = 0; i < totalPages; i++) {
                            paginationPages.push(
                                <PaginationPage
                                    key={i}
                                    isActive={activePage === i}
                                    onClick={() => {
                                        setActivePage(i);
                                    }}
                                >
                                    {i + 1}
                                </PaginationPage>
                            );
                        }
                        return paginationPages;
                    })()}
                </PaginationPages>
                <PaginationBackwardForward
                    backward={false}
                    isDisabled={activePage === totalPages - 1}
                    onClick={() =>
                        activePage !== totalPages - 1 &&
                        setActivePage((prev) => prev + 1)
                    }
                >
                    <BsFillTriangleFill />
                </PaginationBackwardForward>
            </Pagination>
        </Container>
    );
};

export default CoursesPagination;
