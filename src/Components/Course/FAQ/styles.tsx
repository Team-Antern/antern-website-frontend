import styled from "styled-components";

export const Container = styled.div`
    max-width: 95rem;
    margin: auto;
    font-family: "Plus Jakarta Sans", sans-serif;
    padding: 0 4.5rem;
    @media screen and (max-width: 720px) {
        padding: 0 3rem;
    }
    @media screen and (max-width: 540px) {
        padding: 0 2.5rem;
    }
`;

export const Heading = styled.div`
    margin-bottom: 5rem;
    font-weight: 700;
    font-size: 5rem;
    letter-spacing: -0.03em;
    text-transform: capitalize;
    text-align: center;
    @media screen and (max-width: 1000px) {
        font-size: 4rem;
    }
    @media screen and (max-width: 720px) {
        margin-bottom: 3rem;
    }
    @media screen and (max-width: 540px) {
        font-size: 3rem;
    }
`;

export const Content = styled.div``;

export const QuestionAnswer = styled.div`
    padding: 3rem 2.5rem;
    border-bottom: 0.1rem solid #d0daff;
    @media screen and (max-width: 1000px) {
        padding: 2rem 1.5rem;
    }
`;

export const Question = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #24272c;
    font-size: 4rem;
    cursor: pointer;
    @media screen and (max-width: 1000px) {
        font-size: 3rem;
    }
    @media screen and (max-width: 540px) {
        font-size: 2.5rem;
    }
`;

export const QuestionContent = styled.div`
    font-weight: 700;
    font-size: 2.5rem;
    letter-spacing: -0.02em;
    @media screen and (max-width: 1000px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 540px) {
        font-size: 1.8rem;
    }
`;

export const Answer = styled.div`
    margin-top: 3rem;
    font-weight: 600;
    font-size: 2rem;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: #565656;
    @media screen and (max-width: 1000px) {
        margin-top: 2rem;
        font-size: 1.6rem;
    }
    @media screen and (max-width: 540px) {
        font-size: 1.2rem;
    }
`;
