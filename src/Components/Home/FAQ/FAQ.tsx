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
import AnimateOnVisible from "../../Global/AnimateOnVisible/AnimateOnVisible";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "01. What is the pre-requisite for the course?",
    answer:
      "Students should have a basic foundation in mathematics. Some familiarity with a programming language such as Python is also helpful.",
  },
  {
    question: "02. How long is the course?",
    answer:
      "The duration of the course will depend on the specific curriculum and schedule. Please check with the course instructor or administrator for more information.",
  },
  {
    question: "03. Will the courses provide hands-on experience?",
    answer:
      "Yes, the course will include hands-on exercises and projects to allow students to apply what they are learning in a practical way.",
  },
  {
    question: '04. What is the "earn while learning" model in the course?',
    answer:
      'The "earn while learning" model allows students to apply what they are learning in the course to real-world projects and earn income while they study.',
  },
  {
    question: '05. What is the "write research paper" component of the course?',
    answer:
      'The "write research paper" component of the course requires students to conduct their own research on a topic related to topic and write a formal research paper.',
  },
];

const FAQ = React.forwardRef<HTMLDivElement>(({}, ref) => {
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);
  return (
    <AnimateOnVisible as={motion.div}>
      <Container ref={ref}>
        <Heading>frequently asked questions</Heading>
        {/* <Desc>Want to join the Metacrafters Team?</Desc> */}
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
                  {selectedFAQ === index ? <FiChevronUp /> : <FiChevronDown />}
                </Chevron>
              </QuestionChevron>
              <Expand open={index === selectedFAQ}>
                <Answer>{answer}</Answer>
              </Expand>
            </QuestionAnswer>
          ))}
        </Content>
      </Container>
    </AnimateOnVisible>
  );
});

export default React.memo(FAQ);
