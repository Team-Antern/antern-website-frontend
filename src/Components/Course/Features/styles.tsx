import styled from "styled-components";

export const Container = styled.div`
    background: #fff;
    box-shadow: 0px 15px 60px rgba(5, 9, 13, 0.04);
    width: calc(100% - 2.5rem);
    max-width: 120rem;
    margin: auto;
    border-radius: 2rem;
    position: relative;
    top: -8rem;
    z-index: 2;
`;

export const Feature = styled.div`
    text-align: center;
    flex-grow: 1;
`;

export const FeatureHeading = styled.div`
    margin-bottom: 1.6rem;
    font-family: "Plus Jakarta Sans";
    font-weight: 600;
    font-size: 3rem;
    line-height: 130%;
    color: #121e27;
    text-transform: capitalize;
`;

export const FeatureDesc = styled.div`
    font-weight: 400;
    line-height: 150%;
    color: #394a65;
`;

export const FeaturesSeperator = styled.div`
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        #4df3a3 53.89%,
        rgba(255, 255, 255, 0) 96.15%
    );
    width: 0.2rem;
    height: 5.8rem;
`;

export const WithoutSwiper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    padding: 6rem 4rem;
    @media screen and (max-width: 880px) {
        display: none;
    }
`;

export const WithSwiper = styled.div`
    display: none;
    @media screen and (max-width: 880px) {
        display: block;
    }
    padding: 4rem 2.5rem;
`;
