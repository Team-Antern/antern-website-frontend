import styled from "styled-components";

export const Container = styled.div`
    font-family: "Plus Jakarta Sans";
    padding: 0rem 4rem;
    @media screen and (max-width: 900px) {
        padding: 0rem 4rem;
    }
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 9rem;
    max-width: 80rem;
    margin: auto;
    line-height: 100%;
    text-align: center;
    margin-bottom: 8rem;
    position: relative;
    letter-spacing: -0.05em;
    @media screen and (max-width: 900px) {
        width: 80%;
        font-size: 7rem;
    }
    @media screen and (max-width: 700px) {
        font-size: 6rem;
        width: 100%;
    }
    @media screen and (max-width: 540px) {
        font-size: 4rem;
    }
`;

export const LoveSymbol = styled.img`
    @media screen and (max-width: 540px) {
        width: 4rem;
    }
`;

export const DownArrow = styled.img`
    position: absolute;
    width: 6rem;
    right: 5rem;
    top: 12rem;
    @media screen and (max-width: 900px) {
        width: 5rem;
        top: auto;
        bottom: -5rem;
    }
    @media screen and (max-width: 700px) {
        display: none;
    }
`;

export const HeadingUnderline = styled.img`
    position: absolute;
    bottom: -5rem;
    right: 20rem;
    @media screen and (max-width: 900px) {
        width: 30rem;
        left: 50%;
        right: auto;
        transform: translateX(-50%);
        bottom: -3rem;
    }
    @media screen and (max-width: 540px) {
        width: 20rem;
        left: 60%;
        bottom: -2.5rem;
    }
`;

export const Content = styled.div`
    max-width: 115rem;
    margin: auto;
`;
