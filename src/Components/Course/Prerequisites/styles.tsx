import styled from "styled-components";

export const Container = styled.div`
    padding: 0 5.4rem;
    @media screen and (max-width: 620px) {
        margin: 6rem 0 1rem;
        padding: 0 4rem;
    }
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans";
    text-align: center;
    margin-bottom: 5rem;
    font-weight: 600;
    font-size: 7.5rem;
    line-height: 130%;
    text-transform: capitalize;
    letter-spacing: -0.055em;
    @media screen and (max-width: 1000px) {
        font-size: 6rem;
    }
    @media screen and (max-width: 620px) {
        font-size: 4rem;
        margin-bottom: 4.5rem;
    }
`;

export const Content = styled.div`
    max-width: 100rem;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 0.5rem;
    justify-content: center;
    @media screen and (max-width: 620px) {
        gap: 1rem;
    }
`;

export const Prerequisite = styled.div`
    padding: 2.5rem 3.5rem 2.5rem 2.2rem;
    border: 0.05rem solid #000000;
    border-radius: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    @media screen and (max-width: 850px) {
        padding: 1.2rem 2.5rem 1.2rem 2rem;
    }
    @media screen and (max-width: 620px) {
        width: 100%;
    }
`;

export const PrerequisiteStar = styled.div`
    width: 4rem;
    height: 4rem;
    background: url("/assets/point3.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width: 850px) {
        width: 3.5rem;
        height: 3.5rem;
    }
`;

export const PrerequisiteContent = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 2.8rem;
    letter-spacing: -0.03em;
    color: #121e27;
    text-transform: capitalize;
    @media screen and (max-width: 850px) {
        font-size: 2.2rem;
    }
`;
