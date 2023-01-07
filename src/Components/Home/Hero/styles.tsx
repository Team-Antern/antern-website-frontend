import styled from "styled-components";

export const Container = styled.div`
    padding: 5rem 5.4rem 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 11rem);
    margin-bottom: 6rem;
    @media screen and (max-width: 600px) {
        padding: 10rem 3rem 8rem;
        min-height: auto;
    }
`;

export const Content = styled.div`
    position: relative;
    max-width: 72rem;
    margin: auto;
    text-align: center;
    position: relative;
    z-index: 1;
`;

export const BestQualityCourses = styled.div`
    background: #eb690a;
    border-radius: 3rem;
    padding: 1rem 2.5rem;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.08em;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 3.2rem;
    display: inline-block;
    @media screen and (max-width: 600px) {
        font-size: 1.4rem;
    }
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 7rem;
    line-height: 115%;
    text-align: center;
    text-transform: uppercase;
    color: #dee3ec;
    flex-wrap: wrap;
    justify-content: center;
    @media screen and (max-width: 600px) {
        font-size: 5.6rem;
    }
    @media screen and (max-width: 480px) {
        font-size: 4rem;
    }
`;

interface HeadingLetterProps {
    green: boolean;
}

export const HeadingLetter = styled.span<HeadingLetterProps>`
    ${({ green }) => (green ? "color: #4df3a3;" : "")}
`;

export const Desc = styled.div`
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 150%;
    color: #fff;
    opacity: 0.8;
    margin: 2.4rem 0 3.2rem;
    @media screen and (max-width: 600px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 480px) {
        font-size: 1.6rem;
    }
`;

export const Reviews = styled.div`
    margin-top: 10rem;
`;

export const Peoples = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2.4rem;
    justify-content: center;
    margin-left: 6rem;
`;

interface PeopleProps {
    src: string;
    index: number;
}

export const People = styled.div<PeopleProps>`
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    border: 0.2rem solid #fff;
    background: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    position: relative;
    left: -${({ index }) => index * 1.5}rem;
`;

export const ReviewsContent = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 500;
    line-height: 150%;
    justify-content: center;
`;

export const Rating = styled.div`
    font-size: 1.8rem;
    color: #ffd910;
`;

export const NumberOfReviews = styled.div`
    color: #f4f4f4;
`;

export const ReviewsPageArrow = styled.div`
    display: flex;
    align-items: center;
    color: #4df3a3;
    font-size: 2.5rem;
`;

const leftRightArtStyles = `
    position: absolute;
    background-size: cover;
    @media screen and (max-width: 1200px) {
        display: none;
    }
`;

export const LeftArt = styled.div`
    ${leftRightArtStyles}
    width: 58rem;
    height: 76rem;
    background: url("/assets/leftart.svg");
    top: -12rem;
    left: -30rem;
`;

export const RightArt = styled.div`
    ${leftRightArtStyles}
    width: 50rem;
    height: 75rem;
    background: url("/assets/rightart.svg");
    top: -20rem;
    right: -30rem;
`;
