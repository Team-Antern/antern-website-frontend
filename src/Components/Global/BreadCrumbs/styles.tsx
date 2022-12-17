import styled from "styled-components";

export const Container = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    color: #eb690a;
    font-weight: 400;
    line-height: 150%;
`;

interface BreadCrumbLinkProps {
    isActive: boolean;
}

export const BreadCrumbLink = styled.div<BreadCrumbLinkProps>`
    text-transform: capitalize;
    opacity: ${({ isActive }) => (isActive ? `1` : `0.67`)};
`;

export const BreadCrumbArrow = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
`;
