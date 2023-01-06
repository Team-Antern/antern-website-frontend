import styled from "styled-components";

export const Container = styled.div`
    min-height: calc(100vh - 11rem);
    margin-bottom: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Background = styled.div`
    background: url("/assets/section_bg.svg");
    background-position: center;
    width: 151.2rem;
    height: 128rem;
    position: absolute;
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 5rem;
    line-height: 120%;
    color: #dee3ec;
    text-align: center;
    text-transform: capitalize;
`;

export const Content = styled.div`
    max-width: 114rem;
    margin: 7.2rem auto;
`;

export const SlideControls = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
`;
