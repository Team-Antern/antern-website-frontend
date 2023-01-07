import styled from "styled-components";

const inputTextStyles = `
    font-weight: 500;
    font-size: 1.8rem;
    color: #969393;
`;

export const Container = styled.input`
    padding: 1.8rem 2rem;
    border: 0.1rem solid #4df3a3;
    border-radius: 0.8rem;
    width: 100%;
    background: transparent;
    ${inputTextStyles}
    &::-webkit-input-placeholder {
        ${inputTextStyles}
    }
    &::-moz-placeholder {
        ${inputTextStyles}
    }
    &::-ms-input-placeholder {
        ${inputTextStyles}
    }
`;
