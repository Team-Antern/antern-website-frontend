import styled from "styled-components";

export const Container = styled.div`
    background: #13222f;
    backdrop-filter: blur(22px);
    border-radius: 4.6rem 4.6rem 0px 0px;
    padding: 9rem 5.4rem 7rem;
    @media screen and (max-width: 480px) {
        padding: 9rem 5.4rem 7rem;
    }
    @media screen and (max-width: 430px) {
        padding: 6.5rem 3.2rem 7rem;
        border-radius: 0;
    }
    position: relative;
    overflow: hidden;
    margin: auto;
`;

export const Background = styled.div`
    background: url("/assets/footerhomebg.png");
    background-position: center;
    width: 102rem;
    height: 102rem;
    position: absolute;
    top: -100%;
    z-index: -1;
    right: -20%;
`;

export const Content = styled.div`
    max-width: 115rem;
    margin: auto;
`;

export const AboutCompanyLinkSections = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 900px) {
        flex-direction: column;
        gap: 4rem;
    }
`;

export const AboutCompany = styled.div`
    max-width: 38rem;
    @media screen and (max-width: 900px) {
        max-width: max-content;
        padding: 0 10rem;
    }
    @media screen and (max-width: 630px) {
        padding: 0rem;
    }
`;

export const CompanyLogo = styled.img`
    width: 15rem;
    margin-bottom: 0.6rem;
    @media screen and (max-width: 900px) {
        margin-bottom: 1.5rem;
    }
`;

export const CompanyDesc = styled.div`
    font-weight: 400;
    line-height: 150%;
    color: #e2e2e2;
`;

export const LinkSections = styled.div`
    display: flex;
    gap: 5.6rem;
    @media screen and (max-width: 900px) {
        justify-content: center;
    }
    @media screen and (max-width: 480px) {
        flex-direction: column;
        gap: 3.2rem;
    }
`;

export const LinkSection = styled.div`
    text-transform: capitalize;
`;

export const LinkSectionHeading = styled.div`
    font-weight: 500;
    font-size: 2rem;
    line-height: 150%;
    color: #f7faff;
    margin-bottom: 1.6rem;
`;

export const LinkSectionLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Link = styled.div`
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 150%;
    color: #e3e3e3;
    opacity: 0.8;
`;

export const SocialLinksCopyrightButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4rem;
    @media screen and (max-width: 950px) {
        flex-direction: column-reverse;
        gap: 2.5rem;
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: 1.6rem;
`;

export const SocialLink = styled.div`
    width: 4rem;
    height: 4rem;
    background: #203343;
    border-radius: 50%;
    font-size: 2rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Copyright = styled.div`
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 150%;
    color: #c9c9c9;
    opacity: 0.6;
    @media screen and (max-width: 950px) {
        font-size: 1.6rem;
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
    @media screen and (max-width: 430px) {
        width: 100%;
        & div {
            flex: 1;
        }
    }
    @media screen and (max-width: 370px) {
        width: 100%;
        flex-direction: column;
        gap: 1rem;
    }
`;
