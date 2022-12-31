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
    padding: 8.5rem 5.4rem 17rem;
    align-items: center;
    position: relative;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        gap: 6rem;
    }
    @media screen and (max-width: 540px) {
        padding: 5rem 3.2rem;
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

export const EnrollButton = styled.div`
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

export const CourseImage = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
    background: url("https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHw%3D&w=1000&q=80");
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
            #101c26 0.05%,
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
