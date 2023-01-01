import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
    padding: 2.4rem 3.2rem;
    background: #fff;
    border: 0.1rem solid #eaeced;
    box-shadow: 0px 14px 94px rgba(232, 221, 234, 0.6);
    border-radius: 0.8rem;
    max-width: 114rem;
    margin: auto;
`;

export const ContentLengthExpandCollapse = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
`;

export const ContentLength = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-weight: 400;
    line-height: 150%;
    color: #121e27;
    text-transform: capitalize;
`;

export const ExpandCollapse = styled.div`
    font-weight: 500;
    line-height: 150%;
    color: #4df3a3;
    user-select: none;
    cursor: pointer;
`;

export const Sections = styled.div`
    text-transform: capitalize;
    margin-bottom: 4rem;
`;

export const Section = styled.div``;

export const SectionCollapseExpandChevronHeadingLength = styled.div`
    padding: 1.6rem;
    background: #f9fbfc;
    border: 1px solid rgba(210, 215, 219, 0.4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: default;
    user-select: none;
`;

export const SectionCollapseExpandChevronHeading = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`;

export const SectionCollapseExpandChevron = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
`;

export const SectionHeading = styled.div`
    font-weight: 500;
    line-height: 150%;
`;

export const SectionLength = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-weight: 400;
    line-height: 150%;
`;

export const SectionLectures = styled.div`
    padding: 2.4rem 1.6rem;
    background: #fff;
    border: 1px solid #d2d7db;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;

export const SectionLecture = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SectionLectureIconHeading = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`;

export const SectionLectureIcon = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: #505661;
`;

export const SectionLectureHeading = styled.div`
    font-weight: 400;
    line-height: 150%;
    text-decoration-line: underline;
    color: #394a65;
`;

export const SectionLectureLength = styled.div`
    font-weight: 400;
    line-height: 150%;
    color: #4df3a3;
`;
