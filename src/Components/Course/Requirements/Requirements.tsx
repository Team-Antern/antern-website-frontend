import React from "react";
import {
    Container,
    Content,
    Heading,
    Requirement,
    RequirementCheckIcon,
    RequirementContent,
} from "./styles";
import { BiCheckCircle } from "react-icons/bi";

const requirements = [
    "time management skills.",
    "basic technical skills.",
    "basic technical skills.",
    "basic technical skills.",
    "basic technical skills.",
];

const Requirements = () => {
    return (
        <Container>
            <Heading>requirements</Heading>
            <Content>
                {requirements.map((requirement, index) => (
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
