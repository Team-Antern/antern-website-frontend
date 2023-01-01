import styled from "styled-components";

export const Container = styled.div`
    max-width: 95.4rem;
    margin: 15.2rem auto;
    padding: 0 5.4rem;
    position: relative;
    @media screen and (max-width: 540px) {
        padding: 0 3rem;
        margin: 12rem auto;
    }
`;

export const Instructor = styled.div`
    text-align: center;
    width: 100%;
    flex-shrink: 0;
    cursor: default;
`;

export const InstructorProfilePicName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
`;

interface InstructorProfilePicProps {
    src: string;
}

export const InstructorProfilePic = styled.div<InstructorProfilePicProps>`
    width: 5.2rem;
    height: 5.2rem;
    border-radius: 50%;
    background: url(${({ src }) => src});
    background-size: cover;
    border: 0.1rem solid #36dc8d;
`;

export const InstructorName = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 600;
    font-size: 2rem;
    line-height: 150%;
    letter-spacing: -0.065em;
    color: #15294b;
    text-transform: capitalize;
`;

export const InstructorPosition = styled.div`
    font-weight: 400;
    line-height: 150%;
    text-transform: capitalize;
`;

export const InstructorAbout = styled.div`
    margin-top: 2.2rem;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 150%;
    color: #070707;
    opacity: 0.7;
    @media screen and (max-width: 480px) {
        font-size: 1.6rem;
    }
`;

export const Content = styled.div`
    max-width: calc(100% - ((1.8rem * 2) + (4rem * 2)));
    margin: auto;
    background: #fdfefd;
    border: 0.1rem solid rgba(215, 218, 221, 0.5);
    box-shadow: 0px 14px 101px rgba(154, 154, 154, 0.3);
    border-radius: 0.8rem;
    padding: 3.2rem 5.6rem 4.8rem;
    flex-grow: 1;
    user-select: none;
    @media screen and (max-width: 730px) {
        max-width: 100%;
    }
    @media screen and (max-width: 480px) {
        padding: 3.2rem 2.4rem;
    }
`;

export const SlideControls = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: calc(100% - (5.4rem * 2));
    top: 50%;
    left: 5.4rem;
    transform: translateY(-50%);
    @media screen and (max-width: 730px) {
        position: static;
        transform: unset;
        justify-content: center;
        gap: 1rem;
        margin-top: 2rem;
        width: 100%;
    }
`;
