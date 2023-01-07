import styled from "styled-components";

export const Container = styled.div`
    padding: 0 5.4rem;
    @media screen and (max-width: 770px) {
        padding: 0 3.2rem;
    }
    @media screen and (max-width: 640px) {
        padding: 2.5rem;
    }
`;

export const Heading = styled.div`
    margin-bottom: 3.2rem;
    font-family: "Plus Jakarta Sans";
    font-weight: 600;
    font-size: 4rem;
    line-height: 125%;
    text-align: center;
    color: #121e27;
    text-transform: capitalize;
    @media screen and (max-width: 970px) {
        font-size: 3.2rem;
    }
`;

export const Content = styled.div`
    margin: 3.2rem 0 10rem;
`;
