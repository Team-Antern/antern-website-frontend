import React, { useState } from "react";
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

const CoursesPagination = () => {
    const [totalPages, setTotalPages] = useState(5);
    const [activePage, setActivePage] = useState(0);
    return (
        <Container>
            <Heading>Courses By Antern</Heading>
            <Content>
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
            </Content>
            <Pagination>
                <PaginationBackwardForward backward>
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
                <PaginationBackwardForward backward={false}>
                    <BsFillTriangleFill />
                </PaginationBackwardForward>
            </Pagination>
        </Container>
    );
};

export default CoursesPagination;
