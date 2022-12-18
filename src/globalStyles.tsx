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
