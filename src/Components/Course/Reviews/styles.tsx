import styled from "styled-components";

export const Container = styled.div`
    background: #13222f;
    padding: 10rem 4rem;
    @media screen and (max-width: 900px) {
        padding: 6rem 4rem;
    }
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 5rem;
    line-height: 120%;
    color: #ebedf0;
    text-align: center;
    margin-bottom: 8rem;
    text-transform: capitalize;
    @media screen and (max-width: 900px) {
        font-size: 3.2rem;
    }
`;

export const Content = styled.div`
    max-width: 115rem;
    margin: auto;
`;
