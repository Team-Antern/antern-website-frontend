import styled from "styled-components";

export const Container = styled.div`
    max-width: 115rem;
    margin: 15rem auto 11rem;
    text-transform: capitalize;
    padding: 0 4rem;
    @media screen and (max-width: 700px) {
        text-align: center;
    }
`;

export const Heading = styled.div`
    margin-bottom: 3rem;
    font-family: "Plus Jakarta Sans";
    font-weight: 600;
    font-size: 4rem;
    line-height: 125%;
    color: #121e27;
    @media screen and (max-width: 700px) {
        margin-bottom: 4rem;
        font-size: 3.5rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem 1.6rem;
    @media screen and (max-width: 700px) {
        justify-content: center;
    }
`;

export const Skill = styled.div`
    padding: 1.2rem 3.2rem;
    font-weight: 400;
    line-height: 150%;
    color: #252d3a;
    background: #effaf7;
    box-shadow: 0px 8px 16px #eaeeef;
    border-radius: 1rem;
    @media screen and (max-width: 600px) {
        width: calc((100% - 1.6rem) / 2);
    }
    @media screen and (max-width: 520px) {
        width: 100%;
    }
`;
