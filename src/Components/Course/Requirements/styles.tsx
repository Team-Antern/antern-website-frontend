import styled from "styled-components";

export const Container = styled.div`
    max-width: 115rem;
    margin: 0 auto 10rem;
    padding: 0 4rem;
`;

export const Heading = styled.div`
    margin-bottom: 4rem;
    font-family: "Plus Jakarta Sans";
    font-weight: 600;
    font-size: 4rem;
    line-height: 130%;
    color: #121e27;
    text-transform: capitalize;
    @media screen and (max-width: 700px) {
        font-size: 3.5rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    @media screen and (max-width: 600px) {
        gap: 1.2rem;
    }
`;

export const Requirement = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
`;

export const RequirementCheckIcon = styled.div`
    font-size: 3rem;
    color: #15d33f;
    display: flex;
    align-items: center;
    @media screen and (max-width: 600px) {
        font-size: 2.5rem;
    }
`;

export const RequirementContent = styled.div`
    font-weight: 400;
    font-size: 2rem;
    line-height: 150%;
    color: #121e27;
    text-transform: capitalize;
    @media screen and (max-width: 600px) {
        font-size: 1.6rem;
    }
`;
