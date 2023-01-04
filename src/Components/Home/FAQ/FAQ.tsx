import React, { useState } from "react";
import {
    Answer,
    Chevron,
    Container,
    Content,
    Desc,
    Heading,
    Question,
    QuestionAnswer,
    QuestionChevron,
} from "./styles";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Expand from "react-expand-animated";

const faqs = [
    {
        question: "Question1",
        answer: "Answer1",
    },
    {
        question: "Question1",
        answer: "Answer1",
    },
    {
        question: "Question1",
        answer: "Answer1",
    },
];

const FAQ = () => {
    const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);
    return (
        <Container>
            <Heading>frequently asked questions</Heading>
            <Desc>Want to join the Metacrafters Team?</Desc>
            <Content>
                {faqs.map(({ question, answer }, index) => (
                    <QuestionAnswer
                        onClick={() =>
                            typeof selectedFAQ === "number"
                                ? setSelectedFAQ(null)
                                : setSelectedFAQ(index)
                        }
                        key={index}
                    >
                        <QuestionChevron>
                            <Question>{question}</Question>
                            <Chevron>
                                {selectedFAQ === index ? (
                                    <FiChevronUp />
                                ) : (
                                    <FiChevronDown />
                                )}
                            </Chevron>
                        </QuestionChevron>
                        <Expand open={index === selectedFAQ}>
                            <Answer>{answer}</Answer>
                        </Expand>
                    </QuestionAnswer>
                ))}
            </Content>
        </Container>
    );
};

export default FAQ;