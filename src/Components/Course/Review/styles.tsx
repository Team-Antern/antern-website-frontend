import styled from "styled-components";

interface ContainerProps {
    active: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    user-select: none;
    opacity: ${({ active }) => (active ? 1 : 0.8)};
    background: #1b3042;
    padding: 3rem 4.8rem 6rem 2.8rem;
    font-weight: 500;
    line-height: 150%;
    color: #ededed;
    @media screen and (max-width: 540px) {
        padding: 2.5rem 4rem 5rem 2.5rem;
    }
`;

export const Content = styled.div`
    padding-left: 3rem;
    position: relative;
`;

export const ReviewTextLineLinearGradient = styled.div`
    position: absolute;
    left: 0px;
    width: 2px;
    background: linear-gradient(
        320deg,
        rgba(255, 255, 255, 0) 0%,
        #4df3a3 53.89%,
        rgba(255, 255, 255, 0) 96.15%
    );
    height: 100%;
`;

export const ReviewText = styled.div`
    height: 20rem;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 1rem;
    &::-webkit-scrollbar {
        width: 0.3em;
    }
    &::-webkit-scrollbar-track {
        box-shadow: none;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #4df3a3;
    }
`;

export const Reviewer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    margin-bottom: 2.5rem;
    color: #fff;
`;

interface ReviewerProfilePicProps {
    src: string;
}

export const ReviewerProfilePic = styled.div<ReviewerProfilePicProps>`
    width: 6.2rem;
    height: 6.2rem;
    border: 2px solid rgba(194, 199, 208, 0.2);
    border-radius: 50%;
    background: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
`;

export const ReviewerNamePosition = styled.div`
    text-transform: capitalize;
`;

export const ReviewerName = styled.div`
    font-size: 2rem;
    font-weight: 500;
`;

export const ReviewerPosition = styled.div`
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
`;
