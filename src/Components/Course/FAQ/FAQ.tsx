import React, { useContext, useState } from "react";
import {
    Answer,
    Container,
    Content,
    Heading,
    Question,
    QuestionAnswer,
    QuestionContent,
} from "./styles";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Expand from "react-expand-animated";
import { CourseContext } from "../../../Context/CourseContext";

const FAQ = () => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
    const courseDetails = useContext(CourseContext);
    if (!courseDetails) return null;

    return (
        <Container>
            <Heading>frequently asked questions</Heading>
            <Content>
                {courseDetails.faqs.map(({ question, answer }, index) => (
                    <QuestionAnswer key={index}>
                        <Question
                            onClick={() =>
                                activeQuestion === index
                                    ? setActiveQuestion(null)
                                    : setActiveQuestion(index)
                            }
                        >
                            <QuestionContent>{question}</QuestionContent>
                            {activeQuestion === index ? (
                                <BiChevronUp />
                            ) : (
                                <BiChevronDown />
                            )}
                        </Question>
                        <Expand open={activeQuestion === index}>
                            <Answer>{answer}</Answer>
                        </Expand>
                    </QuestionAnswer>
                ))}
            </Content>
        </Container>
    );
};

export default FAQ;
