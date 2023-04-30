import styled from "styled-components";

export const Container = styled.div`
    padding: 5rem 0 0 0;
    background: url("/assets/herobg.svg");
    background-size: cover;
    background-position: center;
    position: relative;
`;

export const Content = styled.div`
    position: relative;
    max-width: 130rem;
    margin: auto;
`;

export const HeroMain = styled.div`
    display: flex;
    gap: 3rem;
    padding: 8.5rem 5.4rem 22rem;
    align-items: center;
    position: relative;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        gap: 6rem;
    }
    @media screen and (max-width: 540px) {
        padding: 5rem 3.2rem 12rem;
    }
`;

export const CourseDetails = styled.div`
    width: 60%;
    flex-shrink: 0;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export const CourseTitle = styled.div`
    font-family: "Plus Jakarta Sans";
    text-transform: capitalize;
    font-weight: 700;
    font-size: 5rem;
    line-height: 120%;
    color: #edf5f1;
    margin-top: 1.6rem;
    @media screen and (max-width: 530px) {
        font-size: 4.5rem;
    }
`;

export const CourseRating = styled.div`
    display: flex;
    gap: 1rem 3rem;
    align-items: center;
    margin: 2.4rem 0 2rem;
    flex-wrap: wrap;
`;

export const CourseStarRating = styled.div`
    display: flex;
    gap: 0.8rem;
    align-items: center;
`;

export const CourseStarRatingContent = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 140%;
    color: #4df3a3;
`;

export const CourseNumberOfRatings = styled.div`
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 150%;
    color: #fff;
    opacity: 0.8;
`;

export const LikesOnCourse = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`;

export const LikeIcon = styled.div`
    display: flex;
    align-items: center;
    color: #4df3a3;
    font-size: 4rem;
`;

export const LikesOnCourseContent = styled.div`
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 150%;
    color: #f5f5f5;
    opacity: 0.9;
`;

export const CourseInstructor = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`;

interface CourseInstructorProfilePicProps {
    src: string;
}

export const CourseInstructorProfilePic = styled.div<CourseInstructorProfilePicProps>`
    width: 4.8rem;
    height: 4.8rem;
    border: 0.1rem solid #36dc8d;
    border-radius: 50%;
    background: url(${({ src }) => src});
    background-size: cover;
`;

export const CourseInstructorName = styled.div`
    font-weight: 500;
    font-size: 2rem;
    line-height: 150%;
    color: #d6d6d6;
    text-transform: capitalize;
`;

export const EnrollNow = styled.div`
    display: flex;
    align-items: center;
    gap: 2.4rem;
    margin: 3.2rem 0 2rem;
    flex-wrap: wrap;
`;

export const EnrollButton = styled.a`
    display: flex;
    flex-direction: column;
    & span:first-child {
        font-weight: 500;
        line-height: 150%;
        color: #101c26;
    }
    & span:last-child {
        font-weight: 400;
        font-size: 1rem;
        line-height: 150%;
        color: #101c26;
    }

    padding: 12px 24px;
    font-weight: 500;
    line-height: 150%;
    cursor: pointer;
    border: 1px solid #4df3a3;
    border-radius: 8px;
    text-align: center;
    background: #4df3a3;
    color: "#101c26";
    transition: 0.2s all;
    &:hover {
        background: #4df3a3;
        color: #101c26;
    }
`;

export const FinancialAid = styled.div`
    font-weight: 400;
    line-height: 150%;
    color: #e4ede9;
    opacity: 0.8;
`;

export const NumberOfPeopleEnrolled = styled.div`
    font-family: "Plus Jakarta Sans";
    font-size: 2rem;
    line-height: 140%;
    color: #fff;
    font-weight: 400;
    & span {
        font-weight: 600;
    }
`;

interface CourseImageProps {
    src: string;
}

export const CourseImage = styled.div<CourseImageProps>`
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
    background: url(${({ src }) => src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width: 750px) {
        width: 100%;
        left: 0;
    }
    &:after {
        position: absolute;
        z-index: 1;
        content: "";
        top: 0;
        width: 60rem;
        height: 100%;
        background: linear-gradient(
            90.05deg,
            #101c26 4%,
            rgba(0, 0, 0, 0) 99.94%
        );
        @media screen and (max-width: 750px) {
            width: 100%;
            background: linear-gradient(
                90deg,
                #101c26 0%,
                rgba(0, 0, 0, 0) 143.75%
            );
        }
    }
`;

export const PlayNow = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
`;

export const PlayNowIcon = styled.div`
    color: #41c88a;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8rem;
    width: 12rem;
    height: 12rem;
    background: #fff;
    border-radius: 50%;
    & svg {
        position: relative;
        left: 0.5rem;
    }
`;

export const PlayNowContent = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 600;
    font-size: 2.8rem;
    letter-spacing: -0.05em;
    color: #fff;
    text-transform: capitalize;
`;

export const CouponText = styled.span`
    padding: 1rem;
    text-transform: uppercase;
    background: #c10f03;
    border-radius: 4px;
    font-weight: bolder;
`;
