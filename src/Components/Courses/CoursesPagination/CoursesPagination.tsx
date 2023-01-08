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
    PaginationWrapper,
} from "./styles";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { Course as CourseInterface } from "../../../Pages/Courses/Courses";
import "@lottiefiles/lottie-player";

interface CoursesPaginationProps {
    courses: CourseInterface[];
}

const CoursesPagination = ({ courses }: CoursesPaginationProps) => {
    const [totalPages, setTotalPages] = useState(0);
    const [activePage, setActivePage] = useState(0);
    useEffect(() => setTotalPages(Math.ceil(courses.length / 6)), [courses]);
    return (
        <Container>
            <Heading>
                {courses.length ? "courses by antern" : "no courses found"}
            </Heading>
            {courses.length ? (
                <>
                    <Content>
                        {courses
                            .slice(activePage * 6, (activePage + 1) * 6)
                            .map((course, index) => {
                                return <Course key={index} {...course} />;
                            })}
                    </Content>
                    <PaginationWrapper>
                        <Pagination>
                            <PaginationBackwardForward
                                isDisabled={activePage === 0}
                                onClick={() =>
                                    activePage !== 0 &&
                                    setActivePage((prev) => prev - 1)
                                }
                            >
                                <HiOutlineChevronLeft />
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
                                isDisabled={activePage === totalPages - 1}
                                onClick={() =>
                                    activePage !== totalPages - 1 &&
                                    setActivePage((prev) => prev + 1)
                                }
                            >
                                <HiOutlineChevronRight />
                            </PaginationBackwardForward>
                        </Pagination>
                    </PaginationWrapper>
                </>
            ) : (
                <lottie-player
                    autoplay
                    loop
                    mode="normal"
                    src="https://assets9.lottiefiles.com/packages/lf20_tmsiddoc.json"
                    style={{
                        maxWidth: "50rem",
                        width: "100%",
                        margin: "auto",
                    }}
                ></lottie-player>
            )}
        </Container>
    );
};

export default CoursesPagination;
