import React from "react";
import { Container, Desc, Heading, Image } from "./styles";

const LectureNotes = () => {
    return (
        <Container>
            <Image src="/assets/lecture-notes.svg" />
            <Heading>lecture notes</Heading>
            <Desc>notes are unavailable for this lecture</Desc>
        </Container>
    );
};

export default LectureNotes;
