import styled from "styled-components";

export const Container = styled.div`
    padding: 5rem 0 30rem 0;
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
    text-align: center;
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 700;
    font-size: 6rem;
    line-height: 115%;
    color: #dee3ec;
    text-transform: capitalize;
    max-width: 52.2rem;
    margin: 1.6rem auto 2.4rem;
`;

export const Desc = styled.div`
    font-weight: 400;
    font-size: 2rem;
    line-height: 150%;
    color: #b9c0c5;
    opacity: 0.8;
`;

export const Chat = styled.div`
    position: absolute;
    top: -6rem;
    left: -15rem;
    width: 44.4rem;
    height: 44.4rem;
    background: url("/assets/chat.svg");
`;

export const Tips = styled.div`
    position: absolute;
    width: 44.4rem;
    height: 44.4rem;
    background: url("/assets/tips.svg");
    top: -6rem;
    right: -15rem;
`;

export const GrowSkill = styled.div`
    position: absolute;
    width: 44.4rem;
    height: 44.4rem;
    background: url("/assets/grow-skill.svg");
    bottom: -35rem;
    left: 50%;
    transform: translateX(-50%);
`;
