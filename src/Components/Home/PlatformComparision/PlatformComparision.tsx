import React from "react";
import {
    Container,
    Heading,
    PlatformComparisionTable,
    PlatformComparisionTableBody,
    PlatformComparisionTableData,
    PlatformComparisionTableHead,
    PlatformComparisionTableHeadData,
    PlatformComparisionTableRow,
    PlatformFeatureCross,
    PlatformFeatureTick,
} from "./styles";
import { FiCheck } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Tick = () => {
    return (
        <PlatformFeatureTick>
            <FiCheck />
        </PlatformFeatureTick>
    );
};

const Cross = () => {
    return (
        <PlatformFeatureCross>
            <RxCross2 />
        </PlatformFeatureCross>
    );
};

const PlatformComparision = () => {
    return (
        <Container>
            <Heading>a better way to prep for coding interviews</Heading>
            <PlatformComparisionTable>
                <PlatformComparisionTableHead>
                    <PlatformComparisionTableRow>
                        <PlatformComparisionTableHeadData>
                            title
                        </PlatformComparisionTableHeadData>
                        <PlatformComparisionTableHeadData
                            style={{ width: "20rem" }}
                        >
                            cracking the
                            <br />
                            coding interview
                        </PlatformComparisionTableHeadData>
                        <PlatformComparisionTableHeadData
                            style={{ width: "20rem" }}
                        >
                            leet code
                        </PlatformComparisionTableHeadData>
                        <PlatformComparisionTableHeadData
                            style={{ width: "20rem" }}
                        >
                            algoexpert
                        </PlatformComparisionTableHeadData>
                    </PlatformComparisionTableRow>
                </PlatformComparisionTableHead>
                <PlatformComparisionTableBody>
                    <PlatformComparisionTableRow>
                        <PlatformComparisionTableData>
                            100+ practice questions
                        </PlatformComparisionTableData>
                        <PlatformComparisionTableData>
                            <Tick />
                        </PlatformComparisionTableData>
                        <PlatformComparisionTableData>
                            <Tick />
                        </PlatformComparisionTableData>
                        <PlatformComparisionTableData>
                            <Cross />
                        </PlatformComparisionTableData>
                    </PlatformComparisionTableRow>
                    <PlatformComparisionTableRow>
                        <PlatformComparisionTableData>
                            100+ practice questions
                        </PlatformComparisionTableData>
                        <PlatformComparisionTableData>
                            <Tick />
                        </PlatformComparisionTableData>
                        <PlatformComparisionTableData>
                            <Tick />
                        </PlatformComparisionTableData>
                        <PlatformComparisionTableData>
                            <Cross />
                        </PlatformComparisionTableData>
                    </PlatformComparisionTableRow>
                </PlatformComparisionTableBody>
            </PlatformComparisionTable>
        </Container>
    );
};

export default PlatformComparision;
