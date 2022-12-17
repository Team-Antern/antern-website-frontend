import styled from "styled-components";

export const Container = styled.div`
    position: relative;
`;

export const Content = styled.select`
    padding: 1rem 2.4rem;
    background: transparent;
    border: 1px solid rgba(5, 100, 54, 0.7);
    border-radius: 4px;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 150%;
    color: #dee3ec;
    width: 100%;
`;

export const Option = styled.option`
    color: #000;
`;

export const SelectChevron = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    right: 2.4rem;
`;
