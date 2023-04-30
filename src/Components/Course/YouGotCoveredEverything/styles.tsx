import styled from "styled-components";

export const Container = styled.div`
    padding: 0 4rem;
    @media screen and (max-width: 900px) {
        padding: 0 4rem;
    }
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 10rem;
    line-height: 100%;
    max-width: 120rem;
    margin: auto;
    margin-bottom: 15rem;
    text-align: center;
    position: relative;
    letter-spacing: -0.05em;
    @media screen and (max-width: 900px) {
        width: 80%;
        font-size: 7rem;
        margin-bottom: 7.5rem;
    }
    @media screen and (max-width: 700px) {
        font-size: 6rem;
        width: 100%;
    }
    @media screen and (max-width: 540px) {
        font-size: 4rem;
    }
`;

export const HeadingUnderline = styled.img`
    position: absolute;
    bottom: -7rem;
    right: 20rem;
    z-index: -1;
    left: 50%;
    transform: translateX(-50%);
    @media screen and (max-width: 900px) {
        width: 30rem;
        right: auto;
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
    display: flex;
    gap: 5rem 3rem;
    justify-content: center;
    @media screen and (max-width: 1080px) {
        flex-direction: column;
    }
`;

export const Card = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    align-items: center;
    font-family: Plus Jakarta Sans;
    font-size: 2rem;
    & > div {
        padding: 2rem 3rem;
    }
    & > div > svg {
        font-size: 2.5rem;
    }
    @media screen and (max-width: 800px) {
        & > div {
            font-size: 1.6rem;
        }
        & > div > svg {
            font-size: 2rem;
        }
    }
`;

export const CardImage = styled.img`
    @media screen and (max-width: 800px) {
        max-width: 35rem;
        width: 100%;
    }
`;
