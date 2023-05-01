import React, { useContext } from "react";
import {
    Buttons,
    Container,
    ExclusiveBenefit,
    ExclusiveBenefitHeading,
    ExclusiveBenefitIcon,
    ExclusiveBenefitSubHeading,
    ExclusiveBenefitSubHeadingHeading,
    ExclusiveBenefits,
    GetExclusiveBenefitsBg1,
    GetExclusiveBenefitsBg2,
    Heading,
    HeadingUnderline,
} from "./styles";
import Button from "../../Global/Button/Button";
import { BsArrowRight } from "react-icons/bs";
import { MdExplore } from "react-icons/md";
import { CourseContext } from "../../../Context/CourseContext";

const exclusiveBenefits = [
    {
        pointIcon: "/assets/point1.svg",
        subHeading: "learn from experts",
        heading: "expert educators",
    },
    {
        pointIcon: "/assets/point2.svg",
        subHeading: "latest industry insights",
        heading: "cutting-edge curriculum",
    },
    {
        pointIcon: "/assets/point3.svg",
        subHeading: "hands on approach",
        heading: "interactive learning experience",
    },
    {
        pointIcon: "/assets/point4.svg",
        subHeading: "learn anytime anywhere",
        heading: "flexibility",
    },
    {
        pointIcon: "/assets/point5.svg",
        subHeading: "unlock job opportunities",
        heading: "career opportunities",
    },
];

const GetExclusiveBenefits = () => {
    const courseDetails = useContext(CourseContext);
    if (!courseDetails) return null;

    return (
        <Container>
            <GetExclusiveBenefitsBg1
                draggable={false}
                src="/assets/get-exclusive-benefit-bg-1.svg"
            />
            <GetExclusiveBenefitsBg2
                draggable={false}
                src="/assets/get-exclusive-benefit-bg-2.svg"
            />
            <Heading>
                get exclusive benefits
                <HeadingUnderline src="/assets/heading-underline.svg" />
            </Heading>
            <Buttons>
                <Button
                    style={{
                        background: "#fff",
                        border: "none",
                        borderRadius: "6.8rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                    href={courseDetails.joinCourseLink}
                    animationProps={{}}
                >
                    get started{" "}
                    <BsArrowRight
                        style={{
                            fontSize: "3rem",
                        }}
                    />
                </Button>
                <Button
                    style={{
                        background: "transparent",
                        border: "2px solid #fff",
                        borderRadius: "6.8rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        transition: "0.3s background ease-in",
                    }}
                    hoverStyle={`
                        background: #fff!important;
                    `}
                    animationProps={{}}
                    onClick={() => {
                        const prerequisitesContainer =
                            document.getElementById("prerequisites");
                        if (prerequisitesContainer)
                            prerequisitesContainer.scrollIntoView({
                                behavior: "smooth",
                            });
                    }}
                >
                    <MdExplore
                        style={{
                            fontSize: "3rem",
                        }}
                    />{" "}
                    explore
                </Button>
            </Buttons>
            <ExclusiveBenefits>
                {exclusiveBenefits.map(
                    ({ pointIcon, subHeading, heading }, index) => (
                        <ExclusiveBenefit key={index}>
                            <ExclusiveBenefitIcon
                                draggable={false}
                                src={pointIcon}
                            />
                            <ExclusiveBenefitSubHeadingHeading>
                                <ExclusiveBenefitSubHeading>
                                    {subHeading}
                                </ExclusiveBenefitSubHeading>
                                <ExclusiveBenefitHeading>
                                    {heading}
                                </ExclusiveBenefitHeading>
                            </ExclusiveBenefitSubHeadingHeading>
                        </ExclusiveBenefit>
                    )
                )}
            </ExclusiveBenefits>
        </Container>
    );
};

export default GetExclusiveBenefits;
