import { useState } from "react";
import {
    Container,
    Content,
    ContentLength,
    ContentLengthExpandCollapse,
    ExpandCollapse,
    Section,
    SectionCollapseExpandChevron,
    SectionCollapseExpandChevronHeading,
    SectionCollapseExpandChevronHeadingLength,
    SectionHeading,
    SectionLecture,
    SectionLectureHeading,
    SectionLectureIcon,
    SectionLectureIconHeading,
    SectionLectureLength,
    SectionLectures,
    SectionLength,
    Sections,
} from "./styles";
import { RxDotFilled } from "react-icons/rx";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { BsPlayCircleFill } from "react-icons/bs";
import formatDuration from "format-duration";
// @ts-ignore
import * as simpleDuration from "simple-duration";
import SmoothCollapse from "react-smooth-collapse";
import Button from "../../Global/Button/Button";

const sections = [
    {
        name: "up and running with python",
        totalLength: 494,
        lectures: [
            {
                name: "installing python acbinstalling python acbinstalling python acbinstalling python acb",
                totalLength: 247,
            },
            {
                name: "installing python",
                totalLength: 247,
            },
        ],
    },
    {
        name: "up and running with python",
        totalLength: 494,
        lectures: [
            {
                name: "installing python",
                totalLength: 247,
            },
            {
                name: "installing python",
                totalLength: 247,
            },
        ],
    },
    {
        name: "up and running with python",
        totalLength: 494,
        lectures: [
            {
                name: "installing python",
                totalLength: 247,
            },
            {
                name: "installing python",
                totalLength: 247,
            },
        ],
    },
    {
        name: "up and running with python",
        totalLength: 494,
        lectures: [
            {
                name: "installing python",
                totalLength: 247,
            },
            {
                name: "installing python",
                totalLength: 247,
            },
        ],
    },
    {
        name: "up and running with python",
        totalLength: 494,
        lectures: [
            {
                name: "installing python",
                totalLength: 247,
            },
            {
                name: "installing python",
                totalLength: 247,
            },
        ],
    },
    {
        name: "up and running with python",
        totalLength: 494,
        lectures: [
            {
                name: "installing python",
                totalLength: 247,
            },
            {
                name: "installing python",
                totalLength: 247,
            },
        ],
    },
    {
        name: "up and running with python",
        totalLength: 494,
        lectures: [
            {
                name: "installing python",
                totalLength: 247,
            },
            {
                name: "installing python",
                totalLength: 247,
            },
        ],
    },
    {
        name: "up and running with python",
        totalLength: 494,
        lectures: [
            {
                name: "installing python",
                totalLength: 247,
            },
            {
                name: "installing python",
                totalLength: 247,
            },
        ],
    },
    {
        name: "up and running with python",
        totalLength: 494,
        lectures: [
            {
                name: "installing python",
                totalLength: 247,
            },
            {
                name: "installing python",
                totalLength: 247,
            },
        ],
    },
    {
        name: "up and running with python",
        totalLength: 494,
        lectures: [
            {
                name: "installing python",
                totalLength: 247,
            },
            {
                name: "installing python",
                totalLength: 247,
            },
        ],
    },
    {
        name: "up and running with python",
        totalLength: 494,
        lectures: [
            {
                name: "installing python",
                totalLength: 247,
            },
            {
                name: "installing python",
                totalLength: 247,
            },
        ],
    },
    {
        name: "up and running with python",
        totalLength: 494,
        lectures: [
            {
                name: "installing python",
                totalLength: 247,
            },
            {
                name: "installing python",
                totalLength: 247,
            },
        ],
    },
];

const ModuleContent = () => {
    const [expandedSections, setExpandedSections] = useState<number[]>([]);
    const [showAllSections, setShowAllSections] = useState(false);
    const isExpanded = (index: number) => expandedSections.includes(index);
    const allSectionsExpanded = () =>
        sections.length === expandedSections.length;
    const expandCollapse = (index: number) => {
        if (isExpanded(index))
            setExpandedSections((prev) => prev.filter((i) => i !== index));
        else setExpandedSections((prev) => [...prev, index]);
    };
    const expandCollapseAll = () => {
        if (allSectionsExpanded()) setExpandedSections([]);
        else setExpandedSections(Object.keys(sections).map((key) => +key));
    };
    return (
        <Container>
            <Content>
                <ContentLengthExpandCollapse>
                    <ContentLength>
                        <span>{sections.length} sections</span>
                        <RxDotFilled />
                        <span>24 lectures</span>
                        <RxDotFilled />
                        <span>14h 42m total length</span>
                    </ContentLength>
                    <ExpandCollapse onClick={expandCollapseAll}>
                        {allSectionsExpanded()
                            ? "Collapse all sections"
                            : "Expand all sections"}
                    </ExpandCollapse>
                </ContentLengthExpandCollapse>
                <Sections>
                    {sections
                        .slice(0, showAllSections ? sections.length : 11)
                        .map(({ name, totalLength, lectures }, index) => (
                            <Section key={index}>
                                <SectionCollapseExpandChevronHeadingLength
                                    onClick={() => expandCollapse(index)}
                                >
                                    <SectionCollapseExpandChevronHeading>
                                        <SectionCollapseExpandChevron>
                                            {isExpanded(index) ? (
                                                <HiChevronUp />
                                            ) : (
                                                <HiChevronDown />
                                            )}
                                        </SectionCollapseExpandChevron>
                                        <SectionHeading>{name}</SectionHeading>
                                    </SectionCollapseExpandChevronHeading>
                                    <SectionLength>
                                        <span>{lectures.length} lectures</span>
                                        <RxDotFilled />
                                        <span>
                                            {simpleDuration.stringify(
                                                totalLength
                                            )}
                                        </span>
                                    </SectionLength>
                                </SectionCollapseExpandChevronHeadingLength>
                                <SmoothCollapse expanded={isExpanded(index)}>
                                    <SectionLectures>
                                        {lectures.map(
                                            ({ name, totalLength }, index) => (
                                                <SectionLecture key={index}>
                                                    <SectionLectureIconHeading>
                                                        <SectionLectureIcon>
                                                            <BsPlayCircleFill />
                                                        </SectionLectureIcon>
                                                        <SectionLectureHeading>
                                                            {name}
                                                        </SectionLectureHeading>
                                                    </SectionLectureIconHeading>
                                                    <SectionLectureLength>
                                                        {formatDuration(
                                                            totalLength * 1000
                                                        )}
                                                    </SectionLectureLength>
                                                </SectionLecture>
                                            )
                                        )}
                                    </SectionLectures>
                                </SmoothCollapse>
                            </Section>
                        ))}
                </Sections>
                {!showAllSections && sections.length > 10 && (
                    <Button
                        style={{
                            background: "#fff",
                            border: "1px solid #CBCBCB",
                            transition: "0.5s all",
                        }}
                        hoverStyle={`
                        background: #4df3a3!important;
                    `}
                        onClick={() => setShowAllSections(true)}
                    >
                        {sections.length - 10} more sections
                    </Button>
                )}
            </Content>
        </Container>
    );
};

export default ModuleContent;
