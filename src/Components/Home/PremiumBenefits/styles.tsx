import styled from "styled-components";

export const Container = styled.div`
    min-height: calc(100vh - 3rem);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* max-width: 130rem; */
    max-width: 118rem;
    margin: 0 auto 12rem;
    /* padding: 5.4rem; */
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

export const ContentWrapper = styled.div`
    position: relative;
    max-width: 100%;
`;

export const Content = styled.div`
    /* max-width: 115rem; */
    width: 100%;
    /* margin: 5rem auto 0; */
    border-radius: 2.4rem;
    /* padding: 3rem 6.5rem; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    @media screen and (max-width: 1300px) {
        padding: 0 20rem;
    }

    @media screen and (max-width: 500px) {
        padding: 0;
    }

    /* @media screen and (max-width: 600px) {
        padding: 0rem;
    } */
`;

export const SlideControls = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    z-index: 5;
    @media screen and (max-width: 750px) {
        position: relative;
        justify-content: center;
        gap: 2rem;
        margin-top: 4rem;
    }
`;

// export const Slides = styled.div``;
