import styled from "styled-components";

export const Container = styled.div`
    max-width: 116rem;
    margin: auto;
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 600;
    font-size: 4rem;
    line-height: 125%;
    color: #101c26;
`;

export const Content = styled.div`
    display: flex;
    gap: 4rem 3.4rem;
    flex-wrap: wrap;
    justify-content: center;
    margin: 7.2rem 0;
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`;

interface PaginationBackwardForwardProps {
    backward: boolean;
}

export const PaginationBackwardForward = styled.div<PaginationBackwardForwardProps>`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    opacity: 0.6;
    border: 0.15rem solid #5d6c83;
    color: #8993a4;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    & svg {
        position: relative;
        ${({ backward }) =>
            backward
                ? `
                    position: relative;
                    left: -2px;
                    transform: rotate(270deg);
                `
                : `
                    left: 2px;
                    transform: rotate(-270deg);
                `}
    }
`;

export const PaginationPages = styled.div`
    display: flex;
    gap: 1rem;
`;

interface PaginationPagesProps {
    isActive: boolean;
}

export const PaginationPage = styled.div<PaginationPagesProps>`
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    user-select: none;
    background: ${({ isActive }) => (isActive ? "#4df3a3" : "#fff")};
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 2rem;
    line-height: 150%;
    color: #42526d;
`;
