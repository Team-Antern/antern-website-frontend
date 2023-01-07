import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 6rem;
    z-index: 2;
    display: flex;
    gap: 2rem;
    user-select: none;
`;

interface SectionProps {
    isActive: boolean;
}

export const Sections = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.6rem;
    align-items: center;
    position: relative;
`;

interface TrackProps {
    scrollPercentage: number;
}

export const Track = styled.div<TrackProps>`
    width: 0.4rem;
    height: calc(100% - 2rem);
    z-index: -1;
    background: linear-gradient(
        to bottom,
        #4df3a3 ${({ scrollPercentage }) => scrollPercentage}%,
        #b7b7b7 ${({ scrollPercentage }) => scrollPercentage}%
    );
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const Section = styled.div<SectionProps>`
    display: flex;
    align-items: center;
    gap: ${({ isActive }) => (isActive ? 2 : 2.8)}rem;
`;

export const SectionTitles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.6rem;
    font-family: "Plus Jakarta Sans";
    line-height: 125%;
    letter-spacing: 0.02em;
    transition: opacity 0.2s ease-in-out;
`;

interface SectionTitleProps {
    isActive: boolean;
}

export const SectionTitle = styled.div<SectionTitleProps>`
    height: ${({ isActive }) => (isActive ? 3.5 : 2.2)}rem;
    display: flex;
    align-items: center;
    font-weight: ${({ isActive }) => (isActive ? 600 : 500)};
    font-size: ${({ isActive }) => (isActive ? 2.4 : 1.7)}rem;
    color: #${({ isActive }) => (isActive ? "b3b9c4" : "8993a4")};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: #b3b9c4;
    }
`;

interface GemProps {
    isActive: boolean;
}

export const Gem = styled.div<GemProps>`
    width: ${({ isActive }) => (isActive ? 3.5 : 2.2)}rem;
    height: ${({ isActive }) => (isActive ? 3.5 : 2.2)}rem;
    background: url("/assets/${({ isActive }) =>
        isActive ? "big" : "small"}-gem.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    /* box-shadow: 0px 4px 36px 0px rgba(77, 243, 163, 1); */
`;
