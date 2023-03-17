import styled from "styled-components";

export const Container = styled.div`
    max-width: 110rem;
    margin: 15rem auto;
    padding: 5.4rem;
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 5rem;
    line-height: 120%;
    text-align: center;
    color: #172133;
    text-transform: capitalize;
`;

export const Desc = styled.div`
    font-weight: 400;
    font-size: 2rem;
    line-height: 150%;
    text-align: center;
    color: #4b4b4b;
    max-width: 85rem;
    margin: 2.4rem auto 7.2rem;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 40px;
`;

export const TeamMember = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`;

interface TeamMemberProfilePic {
    src: string;
}

export const TeamMemberProfilePic = styled.div<TeamMemberProfilePic>`
    background: linear-gradient(
            175.43deg,
            rgba(64, 245, 155, 0.2) 6.55%,
            rgba(77, 243, 163, 0.06) 98.7%
        ),
        url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    border-radius: 3rem;
    width: 27rem;
    height: 27rem;
`;

interface TeamMemberDetailsProps {
    top: boolean;
}

export const TeamMemberDetails = styled.div<TeamMemberDetailsProps>`
    padding: ${({ top }) => (top ? "0 0 4.5rem 2.4rem" : "4.5rem 0 0 2.4rem")};
    ${({ top }) => (top ? "order: -1;" : "")}
    position: relative;
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 2px;
        background: linear-gradient(
            96.12deg,
            #4df3a3 52.98%,
            rgba(253, 251, 255, 0) 75.34%
        );
        ${({ top }) => (top ? "transform: rotate(180deg);" : "")}
    }
    &:before {
        content: "";
        position: absolute;
        ${({ top }) => (top ? "bottom" : "top")}: -0.5rem;
        left: -0.5rem;
        border-radius: 50%;
        width: 1.2rem;
        height: 1.2rem;
        background: #4df3a3;
    }
`;

export const TeamMemberSocials = styled.div`
    display: flex;
    gap: 1.2rem;
`;

export const TeamMemberSocial = styled.a`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background: #d9d8d5;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-size: 1.8rem;
`;

export const TeamMemberName = styled.div`
    margin: 1.2rem 0 1rem;
    font-family: "Plus Jakarta Sans";
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 140%;
    color: #252d3a;
    text-transform: capitalize;
`;

export const TeamMemberPosition = styled.div`
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 150%;
    color: #474343;
    opacity: 0.8;
    text-transform: capitalize;
`;
