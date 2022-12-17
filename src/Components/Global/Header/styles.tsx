import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10rem;
    align-items: center;
    padding: 0.3rem 0 1.6rem 0;
    position: relative;
    &:after {
        content: "";
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 0.1rem;
        opacity: 0.3;
        background: linear-gradient(
            90deg,
            rgba(77, 243, 163, 0) 13.2%,
            #4df3a3 47.63%,
            rgba(77, 243, 163, 0) 87.83%
        );
    }
`;

export const Logo = styled.img`
    width: 10rem;
    height: 2.5rem;
`;

export const Links = styled.div`
    display: flex;
    gap: 4rem;
    flex-grow: 1;
`;

interface LinkProps {
    isActive: boolean;
}

export const Link = styled.div<LinkProps>`
    font-weight: 400;
    line-height: 150%;
    color: ${({ isActive }) => (isActive ? `#4df3a3` : `#b9c0c5`)};
    text-transform: capitalize;
    padding-bottom: 0.6rem;
    position: relative;
    & span {
        opacity: 0.8;
    }
    ${({ isActive }) =>
        isActive
            ? `
                &:after {
                    position: absolute;
                    content: "";
                    bottom: 0;
                    left: 0;
                    border-radius: 2rem;
                    width: 100%;
                    height: 0.2rem;
                    background: #4df3a3;
                }
            `
            : ``}
`;

export const NeedHelpGetStarted = styled.div`
    display: flex;
    gap: 2.4rem;
    align-items: center;
`;

export const NeedHelp = styled.div`
    font-weight: 400;
    line-height: 150%;
    color: #4df3a3;
    opacity: 0.8;
`;
