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
