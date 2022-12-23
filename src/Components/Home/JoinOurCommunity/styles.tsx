import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 104rem;
    margin: auto;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
        url("./assets/join-our-community-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 2.4rem;
    padding: 7rem 0;
`;

export const Container = styled.div`
    max-width: 67rem;
    margin: auto;
    text-align: center;
    color: #fbfbfb;
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 5rem;
    line-height: 120%;
`;

export const Desc = styled.div`
    font-weight: 400;
    line-height: 150%;
    opacity: 0.8;
    margin-top: 1.6rem;
`;

export const InputGroup = styled.div`
    display: flex;
    gap: 2.4rem;
    margin: 2.4rem 0;
    & input {
        flex: 1;
    }
`;
