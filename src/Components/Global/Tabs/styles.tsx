import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    display: inline-flex;
    padding: 1.6rem 2.4rem;
    background: #fdfefd;
    box-shadow: 0px 14px 94px rgba(232, 221, 234, 0.6);
    border-radius: 0.8rem;
    overflow-y: scroll;
    white-space: nowrap;
    @media screen and (max-width: 640px) {
        padding: 1.6rem 2rem;
    }
`;

interface TabProps {
    isActive: boolean;
}

export const Tab = styled.div<TabProps>`
    padding: 1.6rem 2.4rem;
    border-radius: 0.4rem;
    font-weight: 500;
    font-size: 2rem;
    line-height: 150%;
    cursor: pointer;
    ${({ isActive }) =>
        isActive
            ? `
                background: #df7427;
                color: #fff;
              `
            : ""}
    @media screen and (max-width: 800px) {
        font-size: 1.6rem;
        padding: 1.6rem;
    }
`;
