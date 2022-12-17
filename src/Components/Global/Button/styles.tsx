import styled from "styled-components";

interface ContainerProps {
    transparentBg: boolean;
}

export const Container = styled.div<ContainerProps>`
    padding: 12px 24px;
    font-weight: 500;
    line-height: 150%;
    cursor: pointer;
    border: 1px solid #4df3a3;
    border-radius: 8px;
    background: ${({ transparentBg }) =>
        transparentBg ? "transparent" : "#4df3a3"};
    color: ${({ transparentBg }) => (transparentBg ? "#fff" : "#101c26")};
    ${({ transparentBg }) =>
        transparentBg
            ? `
                transition: 0.2s all;
                &:hover {
                    background: #4df3a3;
                    color: #101c26;
                }
            `
            : ``}
`;
