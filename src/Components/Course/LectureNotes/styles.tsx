import styled from "styled-components";

export const Container = styled.div`
    max-width: 114rem;
    margin: auto;
    text-align: center;
    font-family: "Plus Jakarta Sans";
`;

export const Image = styled.img`
    display: block;
    margin: auto;
    width: 50%;
    @media screen and (max-width: 650px) {
        width: 80%;
    }
`;

export const Heading = styled.div`
    margin: 2rem 0;
    font-weight: 600;
    font-size: 4rem;
    line-height: 50px;
    letter-spacing: -0.04em;
    text-transform: capitalize;
    @media screen and (max-width: 600px) {
        font-size: 3.2rem;
        margin: 1rem 0 0.5rem 0;
        line-height: 40px;
    }
`;

export const Desc = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: #7a8699;
    text-transform: capitalize;
    @media screen and (max-width: 600px) {
        font-size: 1.6rem;
    }
`;
