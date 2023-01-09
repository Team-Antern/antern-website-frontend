import styled from "styled-components";

export const Container = styled.div`
    max-width: 30rem;
    width: 100%;
    height: 36rem;
    padding: 4rem 2rem;
    background: linear-gradient(
        144.83deg,
        #101e26 0%,
        #122a27 48.66%,
        #112426 100%
    );
    filter: drop-shadow(0px 6px 61px rgba(36, 166, 103, 0.1));
    border-radius: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

interface CardIconProps {
    src: string;
}

export const CardIcon = styled.div<CardIconProps>`
    width: 7.2rem;
    height: 7.2rem;
    background: url(${({ src }) => src});
    background-size: 100%;
    background-repeat: no-repeat;
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
