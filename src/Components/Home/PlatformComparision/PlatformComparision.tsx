import React from "react";
import {
    Container,
    Background,
    Heading,
    PlatformComparisionTable,
    PlatformComparisionTableBody,
    PlatformComparisionTableData,
    PlatformComparisionTableHead,
    PlatformComparisionTableHeadData,
    PlatformComparisionTableRow,
    PlatformFeatureCross,
    PlatformFeatureTick,
    Content,
} from "./styles";
import { FiCheck } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import AnimateOnVisible from "../../Global/AnimateOnVisible/AnimateOnVisible";
import { motion } from "framer-motion";

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

const PlatformComparision = React.forwardRef<HTMLDivElement>(({}, ref) => {
    return (
        <AnimateOnVisible as={motion.div}>
            <Container ref={ref}>
                <Background />
                <Heading>a better way to prep for coding interviews</Heading>
                <Content>
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
                </Content>
            </Container>
        </AnimateOnVisible>
    );
});

export default PlatformComparision;
