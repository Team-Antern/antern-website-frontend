import React from "react";
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

const AboutCourse = () => {
    const courseFeatures = [
        {
            icon: <AiOutlineClockCircle />,
            content: "17 hours",
        },
        {
            icon: <BsFileEarmarkText />,
            content: "5 modules",
        },
        {
            icon: <TbMessageLanguage />,
            content: "english",
        },
    ];
    return (
        <Container>
            <Left>
                <Heading>about the course</Heading>
                <Desc>
                    <p>
                        Antern began as an experiment in online learning, when
                        Antern instructors Ayush, Tushar & Priyanshu elected to
                        offer their "Introduction to Artificial Intelligence"
                        course online to anyone, for free. Over 160,00 students
                        in more Than 190
                    </p>
                    <p>
                        The potential to educate at a global scale was
                        awe-inspiring, and Antern was founded to pursue a
                        mission to democratize education Get started and learn
                        this courses
                    </p>
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
                <AboutCourseCard>
                    <AboutCourseCardHeading>
                        Skills and experience
                    </AboutCourseCardHeading>
                    <AboutCourseCardContent>
                        <AboutCourseCardContentItem>
                            Basic javascript
                        </AboutCourseCardContentItem>
                        <AboutCourseCardContentItem>
                            Basic HTML
                        </AboutCourseCardContentItem>
                    </AboutCourseCardContent>
                </AboutCourseCard>
                <AboutCourseCard>
                    <AboutCourseCardHeading>
                        Skills and experience
                    </AboutCourseCardHeading>
                    <AboutCourseCardContent>
                        <AboutCourseCardContentItem>
                            Basic javascript
                        </AboutCourseCardContentItem>
                        <AboutCourseCardContentItem>
                            Basic HTML
                        </AboutCourseCardContentItem>
                    </AboutCourseCardContent>
                </AboutCourseCard>
            </Right>
        </Container>
    );
};

export default AboutCourse;
