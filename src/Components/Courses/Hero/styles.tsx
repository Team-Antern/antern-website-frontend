import styled from "styled-components";

export const Container = styled.div`
    padding: 5rem 0 8rem 0;
    background: url("/assets/herobg.svg");
    background-size: cover;
    background-position: center;
    overflow: hidden;
`;

export const Content = styled.div`
    position: relative;
    max-width: 115rem;
    margin: auto;
`;

export const HeroMain = styled.div`
    max-width: 63rem;
    margin: 5.5rem auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 3rem;
    position: relative;
    z-index: 1;
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 700;
    font-size: 6rem;
    line-height: 115%;
    text-align: center;
    color: #dee3ec;
    text-transform: capitalize;
    max-width: 52.2rem;
    margin: 1.6rem auto 0;
    @media screen and (max-width: 700px) {
        font-size: 5rem;
    }
    @media screen and (max-width: 460px) {
        font-size: 4rem;
    }
`;

export const InputContainer = styled.div`
    background: rgba(19, 32, 44, 0.5);
    backdrop-filter: blur(7.5px);
    border: 0.1rem solid #1c2c3a;
    border-radius: 6rem;
    padding: 2rem 3.2rem;
    width: 100%;
    margin: 4rem 0 1.6rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    cursor: text;
    @media screen and (max-width: 470px) {
        padding: 1.5rem 2.7rem;
    }
`;

const inputTextStyles = `
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 150%;
    color: rgba(222, 227, 236, 0.5);
    @media screen and (max-width: 470px) {
        font-size: 1.6rem;
    }
`;

export const Input = styled.input`
    width: 100%;
    background: transparent;
    border: none;
    ${inputTextStyles}
    &::-webkit-input-placeholder {
        ${inputTextStyles}
    }
    &::-moz-placeholder {
        ${inputTextStyles}
    }
    &::-ms-input-placeholder {
        ${inputTextStyles}
    }
`;

export const InputIcon = styled.div`
    font-size: 2.5rem;
    color: #dee3ec;
    display: flex;
    align-items: center;
    border-left: 1px solid rgba(209, 216, 223, 0.3);
    padding-left: 2rem;
    @media screen and (max-width: 470px) {
        font-size: 2rem;
    }
`;

export const Stats = styled.div`
    font-weight: 300;
    line-height: 150%;
    color: #ab5314;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    @media screen and (max-width: 470px) {
        text-align: center;
        font-size: 1.4rem;
    }
`;

export const Rocket = styled.div`
    position: absolute;
    top: 0;
    left: -2rem;
    width: 32rem;
    height: 32rem;
    background: url("/assets/rocket.svg");
`;

export const Discount = styled.div`
    position: absolute;
    width: 28rem;
    height: 28rem;
    background: url("/assets/discount.svg");
    bottom: -10rem;
    left: -2rem;
`;

export const ELearning = styled.div`
    position: absolute;
    width: 32rem;
    height: 32rem;
    background: url("/assets/e-learning.svg");
    top: 0;
    right: -2rem;
`;

export const Code = styled.div`
    position: absolute;
    width: 32rem;
    height: 32rem;
    background: url("/assets/code.svg");
    bottom: -10rem;
    right: -2rem;
`;
