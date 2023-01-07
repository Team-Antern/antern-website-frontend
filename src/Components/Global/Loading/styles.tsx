import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #13222f;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`;

export const Logo = styled.img`
    width: 25rem;
`;
