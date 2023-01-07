import styled from "styled-components";

export const Container = styled.div`
    min-height: calc(100vh - 11rem);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 130rem;
    margin: 0 auto 12rem;
    padding: 5.4rem;
    @media screen and (max-width: 540px) {
        padding: 3.2rem;
    }
`;

export const SubtitleHeadingDesc = styled.div`
    padding: 4rem 2.5rem;
    text-align: center;
    background: linear-gradient(
        97.8deg,
        rgba(206, 206, 206, 0.02) 0.33%,
        rgba(223, 223, 223, 0.0168) 92.48%
    );
    border: 0.1rem solid rgba(255, 255, 255, 0.4);
    border-radius: 2.8rem;
    margin-bottom: 4.5rem;
`;

export const Subtitle = styled.div`
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #4df3a3;
    @media screen and (max-width: 900px) {
        font-size: 1.4rem;
    }
`;

export const Heading = styled.div`
    margin: 0.8rem 0 1.6rem;
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 6rem;
    line-height: 115%;
    color: #e9e9e9;
    text-transform: capitalize;
    @media screen and (max-width: 900px) {
        font-size: 4.6rem;
    }
    @media screen and (max-width: 640px) {
        font-size: 3.8rem;
    }
    @media screen and (max-width: 470px) {
        font-size: 2.5rem;
        margin: 1rem 0 1.6rem;
    }
`;

export const Desc = styled.div`
    max-width: 86rem;
    margin: auto;
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 150%;
    color: #fff;
    opacity: 0.8;
    @media screen and (max-width: 1020px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 900px) {
        font-size: 1.8rem;
    }
    @media screen and (max-width: 470px) {
        font-size: 1.6rem;
    }
`;

export const Content = styled.div`
    padding: 7.4rem 2.5rem;
    display: flex;
    align-items: center;
    gap: 3.2rem;
    max-width: 100%;
    /* background: #192a36;
    border: 0.1rem solid rgba(255, 255, 255, 0.1);
    border-radius: 2.8rem; */
`;

// export const Slides = styled.div``;
