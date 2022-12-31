import styled from "styled-components";

export const Container = styled.div`
    max-width: 116rem;
    margin: auto;
    padding: 0 3rem;
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 600;
    font-size: 4rem;
    line-height: 125%;
    color: #101c26;
    text-align: center;
    letter-spacing: -0.5px;
    @media screen and (max-width: 500px) {
        font-size: 3.5rem;
    }
`;

export const Content = styled.div`
    display: flex;
    gap: 4rem 3.4rem;
    flex-wrap: wrap;
    justify-content: center;
    margin: 7.2rem 0;
    @media screen and (max-width: 500px) {
        margin: 5rem 0;
    }
`;

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Pagination = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 1.4rem 2rem;
    background: #fff;
    box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.1);
    border-radius: 13rem;
`;

interface PaginationBackwardForwardProps {
    isDisabled: boolean;
}

export const PaginationBackwardForward = styled.div<PaginationBackwardForwardProps>`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    opacity: 0.6;
    background: #13222f;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    cursor: pointer;
    opacity: ${({ isDisabled }) => (isDisabled ? "0.2" : "1")};
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
    background: ${({ isActive }) => (isActive ? "#4df3a3" : "transparent")};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 2rem;
    line-height: 150%;
    color: #000;
`;
