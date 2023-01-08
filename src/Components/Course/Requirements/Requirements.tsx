import React, { useContext } from "react";
import {
    Container,
    Content,
    Heading,
    Requirement,
    RequirementCheckIcon,
    RequirementContent,
} from "./styles";
import { BiCheckCircle } from "react-icons/bi";
import { CourseContext } from "../../../Context/CourseContext";

const requirements = [
    "time management skills.",
    "basic technical skills.",
    "basic technical skills.",
    "basic technical skills.",
    "basic technical skills.",
];

const Requirements = () => {
    const courseDetails = useContext(CourseContext);

    if (!courseDetails) return null;

    return (
        <Container>
            <Heading>requirements</Heading>
            <Content>
                {courseDetails.requirements.map((requirement, index) => (
                    <Requirement key={index}>
                        <RequirementCheckIcon>
                            <BiCheckCircle />
                        </RequirementCheckIcon>
                        <RequirementContent>{requirement}</RequirementContent>
                    </Requirement>
                ))}
            </Content>
        </Container>
    );
};

export default Requirements;
