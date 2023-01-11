import styled from "styled-components";

export const Container = styled.div`
    max-width: 28rem;
    width: 100%;
    height: 38rem;
    padding: 4rem;
    border-radius: 2.2rem;
    background: #223341;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardIcon = styled.div`
    width: 8.2rem;
    height: 8.2rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #162633;
`;

export const CardContent = styled.div`
    line-height: 150%;
`;

export const CardTitle = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 108%;
    letter-spacing: -0.04em;
    color: #f2f2f2;
    text-transform: capitalize;
`;

export const CardDesc = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 128.5%;
    letter-spacing: -0.03em;
    color: #dedede;
    opacity: 0.7;
    margin-top: 0.8rem;
`;
