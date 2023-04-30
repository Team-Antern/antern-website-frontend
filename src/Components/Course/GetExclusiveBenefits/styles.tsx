import styled from "styled-components";

export const Container = styled.div`
    background: #c5ffc7;
    padding: 18.2rem 5.4rem 11.4rem;
    position: relative;
    overflow: hidden;
    font-family: "Plus Jakarta Sans";
    @media screen and (max-width: 800px) {
        padding: 14rem 4rem 11.4rem;
    }
`;

export const GetExclusiveBenefitsBg1 = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 40rem;
    transform: translate(-40%, -30%);
    @media screen and (max-width: 800px) {
        width: 30rem;
    }
    @media screen and (max-width: 500px) {
        width: 28rem;
    }
`;

export const GetExclusiveBenefitsBg2 = styled.img`
    width: 40rem;
    position: absolute;
    top: 0;
    right: 40px;
    transform: translateY(-30%);
    @media screen and (max-width: 1370px) {
        right: -10rem;
    }
    @media screen and (max-width: 800px) {
        width: 30rem;
    }
    @media screen and (max-width: 500px) {
        width: 28rem;
    }
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 12.5rem;
    line-height: 100%;
    text-align: center;
    letter-spacing: -0.055em;
    max-width: 117rem;
    margin: auto;
    position: relative;
    @media screen and (max-width: 1000px) {
        font-size: 10rem;
    }
    @media screen and (max-width: 700px) {
        font-size: 8rem;
    }
    @media screen and (max-width: 700px) {
        font-size: 6rem;
    }
`;

export const HeadingUnderline = styled.img`
    position: absolute;
    bottom: -4rem;
    left: 50%;
    transform: translateX(-50%);
    @media screen and (max-width: 1000px) {
        width: 30rem;
    }
    @media screen and (max-width: 700px) {
        width: 25rem;
        bottom: -3rem;
    }
    @media screen and (max-width: 700px) {
        width: 20rem;
    }
`;

export const Buttons = styled.div`
    font-size: 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem 0.5rem;
    padding: 7rem 0 9.2rem;
    text-transform: uppercase;
    & > div {
        padding: 2rem 3rem;
        font-weight: 700;
    }
    @media screen and (max-width: 570px) {
        flex-direction: column;
        & > div {
            width: 100%;
            justify-content: center;
            font-size: 1.6rem;
            padding: 1.5rem 2rem;
        }
    }
`;

export const ExclusiveBenefits = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5.5rem 5rem;
    flex-wrap: wrap;
    max-width: 120rem;
    margin: auto;
`;

export const ExclusiveBenefit = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    @media screen and (max-width: 770px) {
        width: 100%;
    }
`;

export const ExclusiveBenefitIcon = styled.img`
    width: 5rem;
    height: 5rem;
`;

export const ExclusiveBenefitSubHeadingHeading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    justify-content: center;
`;

export const ExclusiveBenefitSubHeading = styled.div`
    font-weight: 600;
    font-size: 1rem;
    line-height: 150%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`;

export const ExclusiveBenefitHeading = styled.div`
    font-weight: 700;
    font-size: 3.5rem;
    text-transform: capitalize;
    line-height: 100%;
    letter-spacing: -0.03em;
    @media screen and (max-width: 770px) {
        font-size: 3rem;
    }
`;
