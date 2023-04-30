import React, { useContext } from "react";
import {
    Container,
    Content,
    Heading,
    Prerequisite,
    PrerequisiteContent,
    PrerequisiteStar,
} from "./styles";
import { CourseContext } from "../../../Context/CourseContext";

const Prerequisites = () => {
    const courseDetails = useContext(CourseContext);
    if (!courseDetails) return null;
    return (
        <Container>
            <Heading>prerequisites</Heading>
            <Content>
                {courseDetails.prerequisites.map((prerequisite, index) => (
                    <Prerequisite key={index}>
                        <PrerequisiteStar />
                        <PrerequisiteContent>
                            {prerequisite}
                        </PrerequisiteContent>
                    </Prerequisite>
                ))}
            </Content>
        </Container>
    );
};

export default Prerequisites;
