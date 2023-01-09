import React from "react";
import { Container, Desc, Heading, Image } from "./styles";
import { useContext } from "react";
import { CourseContext } from "../../../Context/CourseContext";

const LectureNotes = () => {
    const courseDetails = useContext(CourseContext);
    if (!courseDetails) return null;

    return (
        <Container>
            <Image src={courseDetails.lectureNotes} />
            <Heading>learning materials</Heading>
        </Container>
    );
};

export default LectureNotes;
