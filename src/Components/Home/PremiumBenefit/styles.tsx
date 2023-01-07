import styled from "styled-components";

export const Container = styled.div`
    border-radius: 1.6rem;
    position: relative;
    background: #223644;
    user-select: none;
    max-width: 44rem;
`;

export const Image = styled.div`
    background: url("/assets/robot.png");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 34rem;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

export const Tag = styled.div`
    position: absolute;
    top: 2.5rem;
    left: 2.5rem;
    padding: 1rem 2rem;
    background: linear-gradient(
        96.45deg,
        rgba(255, 255, 255, 0.08) 2.81%,
        rgba(211, 211, 211, 0) 110.49%
    );
    border: 0.1rem solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(4px);
    border-radius: 0.4rem;
    display: inline-block;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 120%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
`;

export const Content = styled.div`
    position: relative;
    z-index: 1;
    padding: 30rem 3.2rem 2.5rem;
`;

export const TitlePrice = styled.div`
    display: flex;
    gap: 3.5rem;
`;

export const Title = styled.div`
    font-weight: 500;
    font-size: 2rem;
    line-height: 150%;
    color: #fff;
    text-transform: capitalize;
`;

export const Price = styled.div`
    padding: 1rem 1.8rem;
    font-weight: 500;
    font-size: 1rem;
    line-height: 150%;
    color: #101c26;
    background: #4df3a3;
    border-radius: 0.4rem;
    display: inline-block;
    flex-shrink: 0;
    text-transform: capitalize;
    align-self: start;
`;

export const Desc = styled.div`
    margin: 1.4rem 0 2rem;
    font-weight: 400;
    line-height: 150%;
    color: #e9e9e9;
    opacity: 0.8;
`;

export const Author = styled.div`
    border: 0.1rem solid rgba(217, 217, 217, 0.4);
    border-radius: 3rem 0.8rem 0.8rem 3rem;
    padding: 1rem 2rem 1rem 6.2rem;
    text-transform: capitalize;
    font-weight: 400;
    line-height: 150%;
    color: #e9e9e9;
    opacity: 0.8;
    position: relative;
    display: inline-block;
`;

export const AuthorProfilePic = styled.div`
    width: 4.8rem;
    height: 4.8rem;
    background: url("https://media.licdn.com/dms/image/D4D03AQEC7NXN2_XGug/profile-displayphoto-shrink_800_800/0/1665493308669?e=1677110400&v=beta&t=C275PLXYsOKhisp_bAouPsQL6oCqqZqumiDC-EaQzRo");
    border: 1px solid #4df3a3;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: -0.2rem;
    left: -0.2rem;
`;
