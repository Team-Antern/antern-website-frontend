import styled from "styled-components";

export const Container = styled.div`
    font-family: "Plus Jakarta Sans";
    color: #fbfbfb;
    margin-bottom: 10rem;
`;

export const Heading = styled.div`
    font-weight: 700;
    font-size: 5rem;
    line-height: 120%;
    letter-spacing: -0.055em;
    text-align: center;
    text-transform: capitalize;
`;

export const Desc = styled.div`
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.035em;
    text-align: center;
    opacity: 0.8;
    margin: 1rem 0 7rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;

export const QuestionAnswer = styled.div`
    padding: 3rem;
    background: #101c26;
    border: 0.1rem solid #202e3a;
    box-shadow: 0px 23px 81px #0c151d;
    border-radius: 1.6rem;
`;

export const QuestionChevron = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`;

export const Question = styled.div`
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 125%;
    letter-spacing: -0.03em;
    color: #fafbfb;
    cursor: pointer;
`;

export const Chevron = styled.div`
    display: flex;
    align-items: center;
    color: #98a1b0;
    font-size: 2.8rem;
`;

export const Answer = styled.div`
    margin-top: 2rem;
    font-weight: 500;
    font-size: 2rem;
    line-height: 125%;
    letter-spacing: -0.03em;
    color: #98a1b0;
`;
