import styled from "styled-components";

export const Container = styled.div`
    max-width: 36rem;
    width: 100%;
    padding-top: 2.5rem;
    position: relative;
    user-select: none;
`;

export const ReviewQuotes = styled.div`
    width: 7rem;
    height: 5rem;
    background: url("/assets/reviewquotes.svg");
    background-size: contain;
    position: absolute;
    left: 2.4rem;
    top: 0;
    z-index: 1;
`;

export const Content = styled.div`
    margin-bottom: 3.2rem;
    background: #1b3042;
    padding: 6rem 3.2rem 4.4rem;
    border-radius: 0.4rem;
    position: relative;
    font-weight: 500;
    line-height: 150%;
    color: #ededed;
`;

export const ReviewChevron = styled.div`
    position: absolute;
    color: #1b3042;
    font-size: 4.5rem;
    bottom: -1.8rem;
    transform: rotate(328deg);
`;

export const Reviewer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
`;

interface ReviewerProfilePicProps {
    src: string;
}

export const ReviewerProfilePic = styled.div<ReviewerProfilePicProps>`
    width: 5.2rem;
    height: 5.2rem;
    border-radius: 50%;
    background: url(${({ src }) => src});
    background-size: cover;
`;

export const ReviewerNamePosition = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    line-height: 150%;
    color: #ebedf0;
    text-transform: capitalize;
`;

export const ReviewerName = styled.div`
    font-weight: 500;
    font-size: 1.8rem;
`;

export const ReviewerPosition = styled.div`
    font-weight: 400;
    font-size: 1.4rem;
`;
