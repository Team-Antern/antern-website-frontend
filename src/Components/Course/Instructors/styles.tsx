import styled from "styled-components";

export const Container = styled.div`
    max-width: 114rem;
    margin: 4rem auto;
    background: #fdfefd;
    border: 0.1rem solid rgba(215, 218, 221, 0.5);
    box-shadow: 0px 14px 94px rgba(232, 221, 234, 0.6);
    border-radius: 0.8rem;
    padding: 4rem 1.6rem;
    display: flex;
    gap: 3rem;
    align-items: center;
`;

interface SlideControlProps {
    isDisabled: boolean;
}

export const SlideControl = styled.div<SlideControlProps>`
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.16rem solid #5d6c83;
    border-radius: 50%;
    font-size: 3.5rem;
    color: #798291;
    flex-shrink: 0;
    cursor: pointer;
    transition: all 0.2s;
    opacity: ${({ isDisabled }) => (isDisabled ? "0.2" : `1`)};
    ${({ isDisabled }) =>
        isDisabled
            ? ``
            : `
                &:hover {
                    color: #101c26;
                    background: #40f59b;
                    border-color: #40f59b;
                }
            `}
`;

export const Instructor = styled.div`
    text-align: center;
    width: 100%;
    flex-shrink: 0;
    cursor: default;
`;

interface InstructorProfilePicProps {
    src: string;
}

export const InstructorProfilePic = styled.div<InstructorProfilePicProps>`
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 50%;
    background: url(${({ src }) => src});
    background-size: cover;
    margin: auto;
`;

export const InstructorName = styled.div`
    margin: 1.6rem 0 0.8rem 0;
    font-family: "Plus Jakarta Sans";
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 140%;
    color: #121e27;
    text-transform: capitalize;
`;

export const InstructorPosition = styled.div`
    font-weight: 400;
    line-height: 150%;
    text-transform: capitalize;
`;

export const InstructorAbout = styled.div`
    margin-top: 2.4rem;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 150%;
    color: #070707;
    opacity: 0.7;
`;
