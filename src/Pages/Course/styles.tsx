import styled from "styled-components";

export const Container = styled.div`
    /* overflow: hidden; */
`;

export const Content = styled.div`
    background: url("/assets/coursebg.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0px -100px;
    display: flex;
    flex-direction: column;
    gap: 15rem;
    @media screen and (max-width: 900px) {
        gap: 8rem;
    }
    @media screen and (max-width: 540px) {
        gap: 5rem;
    }
`;
