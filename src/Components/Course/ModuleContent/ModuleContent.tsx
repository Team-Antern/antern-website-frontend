import { useContext, useMemo, useState } from "react";
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
import { CourseContext } from "../../../Context/CourseContext";

const ModuleContent = () => {
    const courseDetails = useContext(CourseContext);
    if (!courseDetails) return null;
    const [expandedSections, setExpandedSections] = useState<number[]>([]);
    const [showAllSections, setShowAllSections] = useState(false);
    const isExpanded = (index: number) => expandedSections.includes(index);
    const allSectionsExpanded = () =>
        courseDetails.sections.length === expandedSections.length;
    const expandCollapse = (index: number) => {
        if (isExpanded(index))
            setExpandedSections((prev) => prev.filter((i) => i !== index));
        else setExpandedSections((prev) => [...prev, index]);
    };
    const expandCollapseAll = () => {
        if (allSectionsExpanded()) setExpandedSections([]);
        else
            setExpandedSections(
                Object.keys(courseDetails.sections).map((key) => +key)
            );
    };
    const [totalNumberOfLectures, courseTotalLength] = useMemo(() => {
        let totalLectures = 0;
        let totalLength: null | number = 0;
        courseDetails.sections.forEach(({ lectures }) => {
            totalLectures += lectures.length;
            if (lectures[0].totalLength)
                lectures.forEach(({ totalLength: totalLectureLength }) => {
                    // @ts-ignore
                    totalLength += totalLectureLength;
                });
        });
        if (!totalLength) totalLength = null;
        return [totalLectures, totalLength];
    }, []);
    return (
        <Container>
            <Content>
                <ContentLengthExpandCollapse>
                    <ContentLength>
                        <span>{courseDetails.sections.length} sections</span>
                        <RxDotFilled />
                        <span>{totalNumberOfLectures} lectures</span>
                        {courseTotalLength && (
                            <>
                                <RxDotFilled />
                                <span>
                                    {simpleDuration.stringify(
                                        courseTotalLength
                                    )}{" "}
                                    total length
                                </span>
                            </>
                        )}
                    </ContentLength>
                    <ExpandCollapse onClick={expandCollapseAll}>
                        {allSectionsExpanded()
                            ? "Collapse all sections"
                            : "Expand all sections"}
                    </ExpandCollapse>
                </ContentLengthExpandCollapse>
                <Sections>
                    {courseDetails.sections
                        .slice(
                            0,
                            showAllSections ? courseDetails.sections.length : 11
                        )
                        .map(({ name, lectures }, index) => {
                            let totalSectionLength: null | number = null;
                            if (lectures[0].totalLength) {
                                totalSectionLength = 0;
                                lectures.forEach(
                                    ({ totalLength: lectureLength }) =>
                                        // @ts-ignore
                                        (totalSectionLength += lectureLength)
                                );
                            }
                            return (
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
                                            <SectionHeading>
                                                {name}
                                            </SectionHeading>
                                        </SectionCollapseExpandChevronHeading>
                                        <SectionLength>
                                            <span>
                                                {lectures.length} lectures
                                            </span>
                                            {totalSectionLength && (
                                                <>
                                                    <RxDotFilled />
                                                    <span>
                                                        {simpleDuration.stringify(
                                                            totalSectionLength
                                                        )}
                                                    </span>
                                                </>
                                            )}
                                        </SectionLength>
                                    </SectionCollapseExpandChevronHeadingLength>
                                    <SmoothCollapse
                                        expanded={isExpanded(index)}
                                    >
                                        <SectionLectures>
                                            {lectures.map(
                                                (
                                                    { name, totalLength },
                                                    index
                                                ) => (
                                                    <SectionLecture key={index}>
                                                        <SectionLectureIconHeading>
                                                            <SectionLectureIcon>
                                                                <BsPlayCircleFill />
                                                            </SectionLectureIcon>
                                                            <SectionLectureHeading>
                                                                {name}
                                                            </SectionLectureHeading>
                                                        </SectionLectureIconHeading>
                                                        {totalLength && (
                                                            <SectionLectureLength>
                                                                {formatDuration(
                                                                    totalLength *
                                                                        1000
                                                                )}
                                                            </SectionLectureLength>
                                                        )}
                                                    </SectionLecture>
                                                )
                                            )}
                                        </SectionLectures>
                                    </SmoothCollapse>
                                </Section>
                            );
                        })}
                </Sections>
                {!showAllSections && courseDetails.sections.length > 10 && (
                    <Button
                        style={{
                            background: "#fff",
                            border: "1px solid #CBCBCB",
                            transition: "0.5s all",
                            marginTop: "4rem",
                        }}
                        hoverStyle={`
                        background: #4df3a3!important;
                    `}
                        onClick={() => setShowAllSections(true)}
                    >
                        {courseDetails.sections.length - 10} more sections
                    </Button>
                )}
            </Content>
        </Container>
    );
};

export default ModuleContent;
