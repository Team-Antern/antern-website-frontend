import styled from "styled-components";

export const Container = styled.div`
    min-height: calc(100vh - 11rem);
    margin-bottom: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 115rem;
    margin: 15rem auto;
    padding: 0 5.4rem;
    @media screen and (max-width: 1050px) {
        padding: 0 3.2rem;
    }
`;

export const Background = styled.div`
    background: url("/assets/sectionbg.webp");
    background-position: center;
    width: 151.2rem;
    height: 128rem;
    position: absolute;
    z-index: -1;
`;

export const Heading = styled.div`
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 5rem;
    line-height: 120%;
    color: #fff;
    margin-bottom: 4.8rem;
    text-align: center;
    text-transform: capitalize;
    @media screen and (max-width: 1050px) {
        font-size: 4rem;
    }
`;

export const Content = styled.div`
    overflow-x: auto;
    max-width: 100%;
`;

export const PlatformComparisionTable = styled.table`
    border-radius: 8px;
    color: #fff;
    table-layout: fixed;
    background: #121f2b;
    min-width: 90rem;
`;

export const PlatformComparisionTableHead = styled.thead`
    background: #253039;
    border-radius: 8px;
`;

export const PlatformComparisionTableBody = styled.tbody`
    & tr td:first-child {
        padding-left: 2.4rem;
        padding-right: 6.5rem;
        font-weight: 400;
        font-size: 2rem;
        line-height: 150%;
    }
    & tr td:last-child {
        padding-right: 2.4rem;
    }
    & tr:first-child td {
        padding-top: 2.4rem;
    }
    & tr:last-child td {
        padding-bottom: 3.2rem;
    }
`;

export const PlatformComparisionTableRow = styled.tr``;

export const PlatformComparisionTableHeadData = styled.th`
    padding: 1.5rem 0;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 150%;
    text-transform: capitalize;
    box-sizing: content-box;
    padding-right: 6.5rem;
    &:first-child {
        padding-right: 0;
        padding-left: 2.4rem;
        text-align: left;
    }
    &:last-child {
        padding-right: 2.4rem;
    }
`;

export const PlatformComparisionTableData = styled.td`
    padding-bottom: 3.2rem;
    text-transform: capitalize;
`;

const platformFeatureTickCrossCommonStyles = `
    border-radius: 0.4rem;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
    height: 5.4rem;
`;

export const PlatformFeatureTick = styled.div`
    background: #1f3342;
    color: #0cad46;
    ${platformFeatureTickCrossCommonStyles}
`;

export const PlatformFeatureCross = styled.div`
    background: #222f3a;
    color: #e40c32;
    ${platformFeatureTickCrossCommonStyles}
`;
