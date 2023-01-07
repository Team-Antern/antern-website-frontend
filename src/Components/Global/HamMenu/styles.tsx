import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(20px);
    z-index: 3;
    padding: 4rem;
`;

export const LogoCloseButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Logo = styled.img`
    width: 10rem;
`;

export const CloseButton = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 3rem;
`;

export const HamMenuLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    font-family: "Plus Jakarta Sans";
    font-weight: 600;
    font-size: 2.6rem;
    line-height: 33px;
    letter-spacing: -0.04em;
    text-transform: capitalize;
`;

interface HamMenuLinkProps {
    isActive: boolean;
}

export const HamMenuLink = styled.div<HamMenuLinkProps>`
    color: #${({ isActive }) => (isActive ? "4de89d" : "8993a4")};
`;
