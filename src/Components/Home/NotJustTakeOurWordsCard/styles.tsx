import styled from "styled-components";

export const Container = styled.div`
    padding: 2.6rem 2.4rem;
    background: #192a36;
    border-radius: 1.6rem;
    height: 100%;
    /* max-width: 35rem; */
    text-align: center;
    user-select: none;
`;

const profilePicWrapperAfterBeforeStyles = `
    content: "";
    position: absolute;
    left: 50%;
    z-index: 0;
    width: 9rem;
    height: 5.5rem;
    background: url("./assets/profile-pic-ellipse.webp");
`;

export const ProfilePicWrapper = styled.div`
    width: 10.5rem;
    height: 10.5rem;
    position: relative;
    margin: 0 auto 2.6rem;
    &:after {
        ${profilePicWrapperAfterBeforeStyles}
        transform: translateX(-50%);
        top: -0.4rem;
    }
    &:before {
        ${profilePicWrapperAfterBeforeStyles}
        transform: translateX(-50%) rotate(180deg);
        bottom: -0.4rem;
    }
`;

interface ProfilePicProps {
    src: string;
}

export const ProfilePic = styled.div<ProfilePicProps>`
    height: 100%;
    border-radius: 50%;
    background: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
`;

export const Name = styled.div`
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 150%;
    color: #e8e8e8;
    margin-bottom: 1.6rem;
`;

export const Company = styled.img`
    margin: 1.6rem 0;
`;

export const Review = styled.div`
    margin-bottom: 2.4rem;
    font-weight: 400;
    line-height: 150%;
    color: #eaebed;
    opacity: 0.8;
    height: 25rem;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 15px;

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

export const Socials = styled.div`
    display: flex;
    gap: 1.6rem;
    justify-content: center;
`;

export const Social = styled.div`
    color: #ecedf3;
    font-size: 3.2rem;
`;
