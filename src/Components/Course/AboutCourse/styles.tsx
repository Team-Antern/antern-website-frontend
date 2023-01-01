import styled from "styled-components";

export const Container = styled.div`
    max-width: 115rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    padding: 0 5.4rem;
    @media screen and (max-width: 920px) {
        flex-direction: column;
    }
    @media screen and (max-width: 800px) {
        text-align: center;
    }
    @media screen and (max-width: 560px) {
        padding: 0 4.5rem;
    }
    @media screen and (max-width: 420px) {
        padding: 0 2.5rem;
    }
`;

export const Left = styled.div`
    width: 60%;
    @media screen and (max-width: 920px) {
        width: 100%;
    }
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 6rem;
    line-height: 115%;
    color: #121e27;
    text-transform: capitalize;
    @media screen and (max-width: 760px) {
        font-size: 4.5rem;
    }
    @media screen and (max-width: 560px) {
        font-size: 3.8rem;
    }
`;

export const Desc = styled.div`
    margin: 3.2rem 0 4.8rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    font-weight: 400;
    line-height: 150%;
    color: #394a65;
    opacity: 0.8;
    @media screen and (max-width: 760px) {
        gap: 2.9rem;
    }
`;

export const CourseFeatures = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem 4rem;
    @media screen and (max-width: 800px) {
        justify-content: center;
    }
`;

export const CourseFeature = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const CourseFeatureIcon = styled.div`
    color: #4df3a3;
    font-size: 3rem;
    display: flex;
    align-items: center;
    @media screen and (max-width: 550px) {
        font-size: 2.5rem;
    }
`;

export const CourseFeatureContent = styled.div`
    font-weight: 500;
    font-size: 2rem;
    line-height: 150%;
    color: #575757;
    text-transform: capitalize;
`;

export const Right = styled.div`
    flex: 1;
    max-width: 37rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    position: relative;
    &:after {
        content: "";
        z-index: -1;
        top: 50%;
        transform: translateY(-50%);
        left: 13rem;
        width: 30rem;
        position: absolute;
        height: 48rem;
        background: linear-gradient(
            94.6deg,
            rgba(239, 250, 247, 0.9) 6.09%,
            rgba(239, 250, 247, 0) 96.38%
        );
        @media screen and (max-width: 920px) {
            display: none;
        }
    }
    @media screen and (max-width: 920px) {
        flex-direction: row;
        width: 100%;
        max-width: none;
        justify-content: center;
    }
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

export const AboutCourseCard = styled.div`
    padding: 2.8rem 2.4rem;
    background: #ffffff;
    box-shadow: 0px 15px 60px rgba(5, 9, 13, 0.04);
    border-radius: 16px;
    @media screen and (max-width: 700px) {
        width: 100%;
        padding: 3rem 2.6rem;
    }
`;

export const AboutCourseCardHeading = styled.div`
    margin-bottom: 0.8rem;
    font-weight: 500;
    font-size: 2rem;
    line-height: 150%;
    color: #243757;
`;

export const AboutCourseCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

export const AboutCourseCardContentItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #394a65;
    &:before {
        content: "";
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
        background: #4df3a3;
    }
`;
