import React, { useState } from "react";
import {
    Container,
    Content,
    ContentLength,
    ContentLengthExpandCollapse,
    ExpandCollapse,
    Heading,
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
import * as simpleDuration from "simple-duration";
import SmoothCollapse from "react-smooth-collapse";

const sections = [
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
            <Heading>Module Content</Heading>
            <Content>
                <ContentLengthExpandCollapse>
                    <ContentLength>
                        <span>15 section</span>
                        <RxDotFilled />
                        <span>146 lectures</span>
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
                    {sections.map(({ name, totalLength, lectures }, index) => (
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
                                        {simpleDuration.stringify(totalLength)}
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
            </Content>
        </Container>
    );
};

export default ModuleContent;
