import styled from "styled-components";

export const Container = styled.div`
    min-height: calc(100vh - 11rem);
    margin-bottom: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
`;

export const Desc = styled.div`
    font-weight: 500;
    font-size: 2rem;
    line-height: 150%;
    color: #b3b3b3;
    margin: 1.4rem 0 1.6rem;
`;

export const Content = styled.div`
    max-width: 115rem;
    margin: 5rem auto 0;
    border-radius: 2.4rem;
    padding: 3rem 6.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 4.5rem;
`;
