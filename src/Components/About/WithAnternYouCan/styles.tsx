import styled from "styled-components";

export const ContainerWrapper = styled.div`
    padding: 13rem 0 20rem 0;
    background: #101c26;
    text-align: center;
`;

export const Container = styled.div`
    max-width: 120rem;
    margin: auto;
`;

export const Heading = styled.div`
    margin-bottom: 8rem;
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 5rem;
    line-height: 120%;
    color: #dee3ec;
    text-transform: capitalize;
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10rem;
`;

export const Card = styled.div`
    flex-shrink: 0;
    padding: 4rem;
    background: #223341;
    border-radius: 2.2rem;
    min-width: 25rem;
    max-width: 32rem;
    width: 100%;
`;

export const CardIcon = styled.div`
    width: 10rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4df3a3;
    background: #162633;
    border-radius: 8px;
    font-size: 5.4rem;
    margin: auto;
`;

export const CardHeading = styled.div`
    font-weight: 500;
    font-size: 2rem;
    line-height: 150%;
    color: #dee3ec;
    text-transform: capitalize;
    margin: 2.4rem 0 1.5rem 0;
`;

export const CardDesc = styled.div`
    font-weight: 400;
    line-height: 150%;
    color: #b5bbc4;
`;
