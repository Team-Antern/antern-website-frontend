import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
    background: #fff;
    border: 0.1rem solid #e2e2e2;
    border-radius: 0.8rem;
    max-width: 36.4rem;
    width: 100%;
    z-index: 1;
    overflow: hidden;
    position: relative;
    /* &:hover::after {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-color: #000;
        opacity: 0.9;
    } */

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`;

interface CourseImageProps {
    src: string;
}

export const CourseImage = styled.div<CourseImageProps>`
    height: 218px;
    border-radius: 0.8rem;
    background: url(${({ src }) => src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const CourseContent = styled(motion.div)`
    position: absolute;
    padding: 1.8rem 3.2rem;
    left: 0;
    background: #fff;
    width: 100%;
    border-radius: 0.8rem;

    /* &:hover::after {
        border: 2px solid #16ec85;
        border-radius: 0.8rem;
    } */
`;

export const CourseDetails = styled.div`
    padding: 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`;

export const CourseTitle = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 140%;
    color: #252d3a;
    text-transform: capitalize;
`;

export const CourseInstructorRating = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.6rem 0;
`;

export const CourseInstructor = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

interface CourseInstructorProfilePicProps {
    src: string;
}

export const CourseInstructorProfilePic = styled.div<CourseInstructorProfilePicProps>`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 0.1rem solid #4df3a3;
    background: url(${({ src }) => src});
    background-size: cover;
`;

export const CourseInstructorNamePosition = styled.div``;

export const CourseInstructorName = styled.div`
    font-weight: 500;
    line-height: 150%;
    color: #232d3d;
    text-transform: capitalize;
`;

export const CourseInstructorPosition = styled.div`
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 150%;
    color: #394a65;
`;

export const CourseRating = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
`;

export const CourseRatingStarIcon = styled.div`
    font-size: 3rem;
    display: flex;
    align-items: center;
    color: #4df3a3;
`;

export const CourseRatingContent = styled.div`
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 150%;
    color: #394a65;
`;

export const CourseFeatures = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.2rem;
`;

export const CourseFeature = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: 10rem;
`;

export const CourseFeatureIcon = styled.div`
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    color: #df7427;
`;

export const CourseFeatureContent = styled.div`
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 150%;
    text-transform: capitalize;
    color: #394a65;
`;

export const ViewMoreCourseLength = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
