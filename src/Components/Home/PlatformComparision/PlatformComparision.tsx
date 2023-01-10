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
import { Code } from "../../Courses/Hero/styles";
import { BsPatchCheckFill } from "react-icons/bs";

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

const companies = ["self taught", "antern", "other platforms"];

const rows = [
    ["affordable", true, true, false],
    ["guest lectures by pioneers", false, true, false],
    ["end to end production grade projects", false, true, false],
    ["earn while learning", false, true, false],
    ["freelancing gigs", false, true, false],
    ["1:1 mentorship session", false, true, true],
    ["resume building", true, true, true],
    ["interview preparation", false, true, true],
    ["high quality & in depth content", false, true, false],
    ["industry level assessments", false, true, false],
    ["community support", false, true, true],
];

const PlatformComparision = React.forwardRef<HTMLDivElement>(({}, ref) => {
    return (
        <AnimateOnVisible as={motion.div}>
            <Container ref={ref}>
                <Background />
                <Heading>
                    Unlock Your Potential with Antern:
                    <br />
                    The Difference We Make
                </Heading>
                <Content>
                    <PlatformComparisionTable>
                        <PlatformComparisionTableHead>
                            <PlatformComparisionTableRow>
                                <PlatformComparisionTableHeadData>
                                    title
                                </PlatformComparisionTableHeadData>
                                {companies.map((name) => (
                                    <PlatformComparisionTableHeadData
                                        style={{ width: "20rem" }}
                                    >
                                        {name}
                                    </PlatformComparisionTableHeadData>
                                ))}
                            </PlatformComparisionTableRow>
                        </PlatformComparisionTableHead>
                        <PlatformComparisionTableBody>
                            {rows.map((column) => (
                                <PlatformComparisionTableRow>
                                    {column.map((value) => (
                                        <PlatformComparisionTableData>
                                            {typeof value === "string" ? (
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "space-between",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <BsPatchCheckFill
                                                        color="#0EA75E"
                                                        style={{
                                                            marginRight: 20,
                                                        }}
                                                    />
                                                    <span
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                    >
                                                        {value}
                                                    </span>
                                                </div>
                                            ) : value ? (
                                                <Tick />
                                            ) : (
                                                <Cross />
                                            )}
                                        </PlatformComparisionTableData>
                                    ))}
                                </PlatformComparisionTableRow>
                            ))}
                        </PlatformComparisionTableBody>
                    </PlatformComparisionTable>
                </Content>
            </Container>
        </AnimateOnVisible>
    );
});

export default React.memo(PlatformComparision);
