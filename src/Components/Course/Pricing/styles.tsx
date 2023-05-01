import styled from "styled-components";

export const Container = styled.div`
    padding: 8rem 4rem;
    background: #f7f7f7;
    font-family: "Plus Jakarta Sans", sans-serif;
    @media screen and (max-width: 1200px) {
        padding: 6rem 3rem;
    }
    @media screen and (max-width: 720px) {
        padding: 4rem 2rem;
    }
`;

export const Content = styled.div`
    max-width: 110rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1200px) {
        flex-direction: column;
        gap: 3rem;
        text-align: center;
    }
    @media screen and (max-width: 540px) {
        gap: 2rem;
    }
`;

export const CourseTitleStudentsEnrolled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.8rem;
    @media screen and (max-width: 1200px) {
        gap: 1.8rem;
    }
`;

export const CourseTitle = styled.div`
    font-weight: 700;
    font-size: 5rem;
    letter-spacing: -0.03em;
    color: #212121;
    text-transform: capitalize;
    @media screen and (max-width: 1200px) {
        font-size: 3rem;
    }
    @media screen and (max-width: 540px) {
        font-size: 2.5rem;
    }
`;

export const StudentsEnrolled = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 540px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

export const StudentsEnrolledContent = styled.div`
    font-weight: 600;
    font-size: 2rem;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: #717171;
    margin-left: -0.5rem;
    @media screen and (max-width: 1200px) {
        margin: 0;
        font-size: 1.8rem;
    }
    @media screen and (max-width: 540px) {
        font-size: 1.6rem;
    }
`;

interface StudentsProps {
    left: number;
}

export const Students = styled.div<StudentsProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: ${({ left }) => left}rem;
`;

interface StudentProps {
    src: string;
    index: number;
}

export const Student = styled.div<StudentProps>`
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    border: 0.2rem solid #fff;
    background: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    position: relative;
    left: -${({ index }) => index * 1.5}rem;
    @media screen and (max-width: 1200px) {
        width: 4.8rem;
        height: 4.8rem;
    }
    @media screen and (max-width: 540px) {
        width: 4rem;
        height: 4rem;
    }
`;

export const EnrollNowPrice = styled.div`
    display: flex;
    align-items: center;
    gap: 4.5rem;
    @media screen and (max-width: 1200px) {
        gap: 3.5rem;
    }
    @media screen and (max-width: 720px) {
        gap: 2.5rem;
    }
    @media screen and (max-width: 540px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

export const EnrollNow = styled.div`
    display: flex;
    align-items: center;
    padding: 2rem 4.5rem 2rem 0;
    border-right: 0.1rem solid #b5b5b5;
    & > div {
        font-size: 2rem;
        padding: 1.4rem 2.4rem;
    }
    @media screen and (max-width: 1200px) {
        padding: 1rem 3.5rem 1rem 0;
        & > div {
            font-size: 1.8rem;
            padding: 1.2rem 2.2rem;
        }
    }
    @media screen and (max-width: 540px) {
        padding: 0;
        border: none;
        & > div {
            font-size: 1.6rem;
            padding: 1rem 2rem;
        }
    }
`;

export const Price = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 540px) {
        gap: 0.8rem;
    }
`;

export const OriginalPriceCouponCode = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

export const OriginalPrice = styled.div`
    font-weight: 700;
    font-size: 2.5rem;
    letter-spacing: -0.02em;
    color: #aeaeae;
    position: relative;
    text-decoration: 0.2rem line-through #ff0000;
    @media screen and (max-width: 1200px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 540px) {
        font-size: 1.8rem;
    }
`;

export const CouponCode = styled.div`
    background: #2d2d2d;
    font-weight: 700;
    font-size: 1.8rem;
    padding: 1rem;
    letter-spacing: -0.02em;
    color: #2eff50;
    text-transform: uppercase;
    @media screen and (max-width: 1200px) {
        font-size: 1.4rem;
        padding: 0.6rem;
    }
    @media screen and (max-width: 540px) {
        font-size: 1.2rem;
        padding: 0.4rem;
    }
`;

export const DiscountedPrice = styled.div`
    font-weight: 600;
    font-size: 6rem;
    line-height: 130%;
    letter-spacing: -0.05em;
    @media screen and (max-width: 1200px) {
        font-size: 4rem;
    }
    @media screen and (max-width: 540px) {
        font-size: 3rem;
    }
`;
