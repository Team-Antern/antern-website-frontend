import styled from "styled-components";

export const Container = styled.div`
    max-width: 67rem;
    margin: 15rem auto 6rem;
    text-align: center;
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 5rem;
    line-height: 120%;
    color: #121e27;
`;

export const Desc = styled.div`
    font-weight: 400;
    line-height: 150%;
    color: #252d3a;
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
