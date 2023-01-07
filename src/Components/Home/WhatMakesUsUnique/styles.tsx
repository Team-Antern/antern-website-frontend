import styled from "styled-components";

export const Container = styled.div`
    min-height: calc(100vh - 11rem);
    margin-bottom: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 5.4rem;
    @media screen and (max-width: 600px) {
        padding: 0 3.2rem;
    }
`;

export const HeadingDescGetStarted = styled.div`
    font-family: "Plus Jakarta Sans";
    text-align: center;
    max-width: 78rem;
    margin: 0 auto;
`;

export const Heading = styled.div`
    font-weight: 700;
    font-size: 5rem;
    line-height: 120%;
    color: #e9e9e9;
    text-transform: capitalize;
    @media screen and (max-width: 950px) {
        font-size: 4rem;
    }
`;

export const Desc = styled.div`
    font-weight: 500;
    font-size: 2rem;
    line-height: 150%;
    color: #b3b3b3;
    margin: 1.4rem 0 1.6rem;
    @media screen and (max-width: 950px) {
        font-size: 1.8rem;
    }
`;

export const Content = styled.div`
    max-width: 115rem;
    margin: 5rem auto 0;
    border-radius: 2.4rem;
    padding: 3rem 6.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4.5rem;
    @media screen and (max-width: 600px) {
        margin: 3rem auto 0;
    }
    @media screen and (max-width: 600px) {
        padding: 0rem;
    }
`;
