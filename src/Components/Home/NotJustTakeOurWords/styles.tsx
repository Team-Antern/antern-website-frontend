import styled from "styled-components";

export const Container = styled.div`
    min-height: calc(100vh - 11rem);
    margin-bottom: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 5.4rem;
    max-width: 114rem;
    margin: auto;
    @media screen and (max-width: 1050px) {
        padding: 0 3.2rem;
    }
`;

export const Background = styled.div`
    background: url("/assets/section_bg.svg");
    background-position: center;
    width: 151.2rem;
    height: 128rem;
    position: absolute;
    z-index: -1;
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 5rem;
    line-height: 120%;
    color: #dee3ec;
    text-align: center;
    text-transform: capitalize;
    @media screen and (max-width: 1050px) {
        font-size: 4rem;
    }
`;

export const Content = styled.div`
    max-width: 100%;
    margin: 7.2rem 0;
    @media screen and (max-width: 450px) {
        margin: 4.8rem 0;
    }
`;

export const SlideControls = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
`;
