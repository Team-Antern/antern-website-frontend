import styled from "styled-components";

export const SwiperDots = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    margin-top: 6rem;
`;

interface SwiperDotProps {
    isActive: boolean;
}

export const SwiperDot = styled.div<SwiperDotProps>`
    width: ${({ isActive }) => (isActive ? 2 : 1.6)}rem;
    height: ${({ isActive }) => (isActive ? 2 : 1.6)}rem;
    background: #ebedf0;
    opacity: ${({ isActive }) => (isActive ? 1 : 0.4)};
    border-radius: 50%;
    cursor: pointer;
`;
