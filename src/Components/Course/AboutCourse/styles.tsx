import styled from "styled-components";

export const Container = styled.div`
    max-width: 115rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`;

export const Left = styled.div`
    width: 60%;
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 6rem;
    line-height: 115%;
    color: #121e27;
    text-transform: capitalize;
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
`;

export const CourseFeatures = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;
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
`;

export const AboutCourseCard = styled.div`
    padding: 2.8rem 2.4rem;
    background: #effaf7;
    box-shadow: 4px 4px 4px rgba(227, 196, 196, 0.65);
    border-radius: 8px;
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
