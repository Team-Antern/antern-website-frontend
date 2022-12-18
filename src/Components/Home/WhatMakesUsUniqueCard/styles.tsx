import styled from "styled-components";

interface ContainerProps {
    bg: string;
}

export const Container = styled.div<ContainerProps>`
    max-width: 30rem;
    width: 100%;
    height: 36rem;
    padding: 4rem 2rem;
    background: linear-gradient(
            14.78deg,
            rgba(0, 0, 0, 0.8) 40.73%,
            rgba(0, 0, 0, 0) 96.23%
        ),
        url("${({ bg }) => bg}");
    background-size: cover;
    background-position: center;
    border-radius: 1.6rem;
`;

export const CardNumber = styled.div`
    width: 7.2rem;
    height: 7.2rem;
    background: #4df3a3;
    border-radius: 50%;
    font-family: "Plus Jakarta Sans";
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 140%;
    color: #2e3540;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.5rem;
`;

export const CardContent = styled.div`
    line-height: 150%;
`;

export const CardTitle = styled.div`
    font-weight: 500;
    font-size: 2rem;
    color: #f2f2f2;
    text-transform: capitalize;
`;

export const CardDesc = styled.div`
    font-weight: 400;
    color: #dedede;
    margin-top: 1.4rem;
`;
