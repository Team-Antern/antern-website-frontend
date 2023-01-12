import React, { useContext } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";
import { TbMessageLanguage } from "react-icons/tb";
import {
    AboutCourseCard,
    AboutCourseCardContent,
    AboutCourseCardContentItem,
    AboutCourseCardHeading,
    Container,
    CourseFeature,
    CourseFeatureContent,
    CourseFeatureIcon,
    CourseFeatures,
    Desc,
    Heading,
    Left,
    Right,
} from "./styles";
import { CourseContext } from "../../../Context/CourseContext";

const AboutCourse = () => {
    const courseDetails = useContext(CourseContext);

    if (!courseDetails) return null;

    const courseFeatures = [
        {
            icon: <AiOutlineClockCircle />,
            content: courseDetails.totalLength,
        },
        {
            icon: <BsFileEarmarkText />,
            content: `${courseDetails.sections.length} modules`,
        },
        {
            icon: <TbMessageLanguage />,
            content: courseDetails.language,
        },
    ];
    return (
        <Container>
            <Left>
                <Heading>about the course</Heading>
                <Desc>
                    {courseDetails.about.map((aboutPara, index) => (
                        <p key={index}>{aboutPara}</p>
                    ))}
                    {typeof courseDetails.razorpay === "string" ? (
                        <p>
                            If you're based out of India and payment is not
                            working, please pay for the course over here:-{" "}
                            <a
                                style={{ color: "blue" }}
                                href={courseDetails.razorpay}
                            >
                                {courseDetails.razorpay}
                            </a>
                        </p>
                    ) : (
                        ""
                    )}
                </Desc>
                <CourseFeatures>
                    {courseFeatures.map(({ icon, content }, index) => (
                        <CourseFeature key={index}>
                            <CourseFeatureIcon>{icon}</CourseFeatureIcon>
                            <CourseFeatureContent>
                                {content}
                            </CourseFeatureContent>
                        </CourseFeature>
                    ))}
                </CourseFeatures>
            </Left>
            <Right>
                {courseDetails.aboutCards.map(({ title, points }, index) => (
                    <AboutCourseCard key={index}>
                        <AboutCourseCardHeading>{title}</AboutCourseCardHeading>
                        <AboutCourseCardContent>
                            {points.map((point, index) => (
                                <AboutCourseCardContentItem key={index}>
                                    {point}
                                </AboutCourseCardContentItem>
                            ))}
                        </AboutCourseCardContent>
                    </AboutCourseCard>
                ))}
            </Right>
        </Container>
    );
};

export default AboutCourse;
