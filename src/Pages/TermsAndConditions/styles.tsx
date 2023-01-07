import styled from "styled-components";

export const Body = styled.div`
    height: 100vh;
    position: relative;
    width: 100%;
`;

export const Container = styled.div`
    padding: 60px 20px;
    font-family: Plus Jakarta Display;
    letter-spacing: -0.015em;
`;

export const Opening = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Content = styled.div`
    max-width: 1032px;
    margin: auto;
    font-size: 23px;
    font-weight: 400;
    line-height: 35px;
`;

export const Heading = styled.div`
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    line-height: 40px;

    & span {
        font-family: Poppins;
        color: #46c162;
    }
`;

export const Desc = styled.div`
    text-align: center;
    font-family: Plus Jakarta Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: -0.015em;
    text-align: center;
    margin: 10px 0px 60px;
`;

export const Sections = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Section = styled.div``;

export const UnorderdList = styled.ul`
    margin: 0px;
    list-style-position: inside;
`;

export const SectionHeading = styled.div`
    font-size: 27px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: -0.01em;
    color: #46c162;
    margin: 20px 0px;
`;

export const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
