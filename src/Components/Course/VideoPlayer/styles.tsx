import styled from "styled-components";

export const Container = styled.div`
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    padding: 0 2rem;
`;

export const CloseButton = styled.div`
    color: #fff;
    position: absolute;
    top: 3rem;
    right: 3rem;
    cursor: pointer;
    font-size: 4rem;
`;

export const Content = styled.iframe`
    border: none;
    width: 100%;
    max-width: 50rem;
    height: 30rem;
    scale: 2;

    @media screen and (max-width: 1100px) {
        scale: 1.5;
    }
    @media screen and (max-width: 800px) {
        scale: 1.3;
    }

    @media screen and (max-width: 700px) {
        scale: 1;
    }
`;
