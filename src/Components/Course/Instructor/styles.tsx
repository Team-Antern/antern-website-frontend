import styled from "styled-components";

export const Container = styled.div`
    padding: 0 5.4rem;
    @media screen and (max-width: 720px) {
        padding: 0 4.8rem;
    }
    @media screen and (max-width: 540px) {
        padding: 0 3.6rem;
    }
    @media screen and (max-width: 540px) {
        padding: 0 2.5rem;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 5rem;
    max-width: 117rem;
    background: #dfffda;
    border-radius: 35px;
    padding: 3.5rem;
    padding-left: 4.5rem;
    margin: auto;
    position: relative;
    @media screen and (max-width: 1100px) {
        flex-direction: column;
        padding: 2.5rem;
    }
    @media screen and (max-width: 540px) {
        gap: 2rem;
    }
`;

export const InstructorDetails = styled.div`
    border-radius: 2.5rem;
    position: relative;
    margin-bottom: 3.5rem;
    @media screen and (max-width: 1100px) {
        margin: 0rem;
    }
`;

interface InstructorProfilePicProps {
    src: string;
}

export const InstructorProfilePic = styled.div<InstructorProfilePicProps>`
    background: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    width: 30rem;
    height: 33rem;
    border-radius: 2.5rem;
    @media screen and (max-width: 1100px) {
        width: 25rem;
        height: 28rem;
    }
`;

export const InstructorNameSocials = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    height: 6.8rem;
    left: 50%;
    background: #bdff95;
    padding: 0 3rem;
    bottom: 0;
    transform: translate(-50%, 50%);
    width: calc(100% + 5rem);
    border-radius: 5.8rem;
    @media screen and (max-width: 1100px) {
        width: calc(100% + 3rem);
        height: 5.8rem;
    }
    @media screen and (max-width: 540px) {
        width: 100%;
        border-radius: 0;
        left: 0;
        transform: none;
        padding: 0 2rem;
    }
`;

export const InstructorName = styled.div`
    font-family: "Plus Jakarta Sans", sans-serif;
    text-transform: capitalize;
    font-weight: 700;
    font-size: 2rem;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1100px) {
        width: calc(100% + 3rem);
        height: 5.8rem;
        font-size: 1.8rem;
    }
    @media screen and (max-width: 540px) {
        width: auto;
    }
`;

export const InstructorSocials = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const InstructorSocial = styled.div`
    font-size: 2.2rem;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1100px) {
        font-size: 1.6rem;
    }
`;

export const InstructorAbout = styled.div`
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 160%;
    letter-spacing: -0.035em;
    @media screen and (max-width: 1100px) {
        font-size: 2rem;
        text-align: center;
    }
    @media screen and (max-width: 720px) {
        font-size: 1.8rem;
    }
    @media screen and (max-width: 540px) {
        font-size: 1.6rem;
    }
`;
