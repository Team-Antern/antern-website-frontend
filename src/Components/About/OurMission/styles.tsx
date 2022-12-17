import styled from "styled-components";

export const Container = styled.div`
    padding: 16rem 0;
    max-width: 135rem;
    margin: auto;
    background: url("./assets/ourmission.svg");
    background-repeat: no-repeat;
    background-position: 3rem 35%;
`;

export const Content = styled.div`
    max-width: 110rem;
    margin: auto;
    display: flex;
    gap: 5rem;
    justify-content: space-between;
    align-items: center;
`;

export const OurMissionCardStacks = styled.div`
    display: flex;
    gap: 3rem;
    flex-shrink: 0;
    & > div:last-child {
        margin-top: 10rem;
    }
`;

export const OurMissionCardStack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`;

export const OurMissionCard = styled.div`
    background: #fff;
    border: 0.1rem solid rgba(226, 227, 227, 0.6);
    box-shadow: 4px 4px 24px #f4f4f4;
    border-radius: 0.8rem;
    max-width: 26.4rem;
    padding: 3.2rem 2.4rem;
`;

export const OurMissionCardIcon = styled.div`
    border: 1px solid #e9e9e9;
    border-radius: 0.4rem;
    display: inline-block;
    width: 5rem;
    height: 5rem;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4df3a3;
    line-height: 150%;
`;

export const OurMissionCardHeading = styled.div`
    margin: 1.6rem 0 0.8rem 0;
    font-weight: 500;
    font-size: 1.8rem;
    color: #243757;
    text-transform: capitalize;
`;

export const OurMissionCardDesc = styled.div`
    font-weight: 400;
    color: #42526d;
`;

export const Right = styled.div``;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 5rem;
    line-height: 120%;
    color: #243757;
    text-transform: capitalize;
`;

export const Desc = styled.div`
    margin: 2.4rem 0 3.2rem 0;
    font-weight: 400;
    font-size: 2rem;
    line-height: 150%;
    color: #354764;
`;

// export const
