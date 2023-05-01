import styled from "styled-components";

export const Container = styled.div`
    font-family: "Plus Jakarta Sans", sans-serif;
`;

export const Heading = styled.div`
    font-weight: 700;
    font-size: 10rem;
    text-align: center;
    letter-spacing: -0.065em;
    max-width: 80rem;
    margin: auto;
    position: relative;
    line-height: 100%;
    @media screen and (max-width: 900px) {
        font-size: 7rem;
    }
    @media screen and (max-width: 700px) {
        font-size: 6rem;
    }
    @media screen and (max-width: 540px) {
        font-size: 4rem;
    }
`;

export const HeadingHighlight = styled.img`
    position: absolute;
    width: 50rem;
    bottom: -1rem;
    right: -4rem;
    z-index: -1;
    @media screen and (max-width: 900px) {
        left: 50%;
        transform: translateX(-50%);
        right: auto;
        width: 40rem;
    }
    @media screen and (max-width: 900px) {
        width: 30rem;
    }
    @media screen and (max-width: 540px) {
        width: 20rem;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 12rem;
    @media screen and (max-width: 900px) {
        margin-top: 6rem;
    }
`;

interface StepProps {
    index: number;
}

export const Step = styled.div<StepProps>`
    user-select: none;
    flex: 1;
    background: #${({ index }) => (index % 2 === 0 ? "F5FFF6" : "E2FFD5")};
    padding: 14.6rem 3.8rem 12.6rem;
    max-width: 30rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media screen and (max-width: 1000px) {
        padding: 8rem 2.8rem;
    }
`;

export const StepNumber = styled.div`
    width: 11rem;
    height: 11rem;
    border-radius: 50%;
    background: linear-gradient(135deg, #00592d 0%, #101c26 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 700;
    font-size: 4.4rem;
    line-height: 56px;
    color: #40f59b;
`;

export const StepHeading = styled.div`
    font-weight: 700;
    font-size: 3.5rem;
    flex-grow: 1;
`;

export const StepDesc = styled.div`
    font-size: 2rem;
    font-weight: 600;
    line-height: 150%;
`;
