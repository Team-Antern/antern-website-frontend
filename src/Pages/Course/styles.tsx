import styled from "styled-components";

export const Container = styled.div`
    overflow: hidden;
`;

export const Content = styled.div`
    padding: 7rem 0 0;
    background: url("/assets/coursebg.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0px -100px;
    @media screen and (max-width: 760px) {
        padding: 4rem 0 0;
    }
`;
