import React from "react";
import {
    Container,
    CourseDetails,
    CourseFeature,
    CourseFeatureContent,
    CourseFeatureIcon,
    CourseFeatures,
    CourseImage,
    CourseInstructor,
    CourseInstructorName,
    CourseInstructorNamePosition,
    CourseInstructorPosition,
    CourseInstructorProfilePic,
    CourseInstructorRating,
    CourseRating,
    CourseRatingContent,
    CourseRatingStarIcon,
    CourseTitle,
    ViewMoreCourseLength,
    CourseDetailsContent,
} from "./styles";
import { AiFillStar } from "react-icons/ai";
import { IoIosTimer } from "react-icons/io";
import Button from "../../Global/Button/Button";
import { BsCameraVideo, BsFileEarmarkPdf } from "react-icons/bs";
import { Course as CourseInterface } from "../../../Pages/Courses/Courses";
import { motion } from "framer-motion";

const Course = ({
    id,
    isLive,
    title,
    instructor,
    courseBanner,
    rating,
    duration,
}: CourseInterface) => {
    return (
        <Container
            as={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={{
                offscreen: {
                    y: 300,
                },
                onscreen: {
                    y: 50,
                    transition: {
                        type: "ease-in",
                    },
                },
            }}
        >
            <CourseImage src={courseBanner} />
            <CourseDetails>
                <CourseTitle>{title}</CourseTitle>

                <CourseDetailsContent>
                    <CourseInstructorRating>
                        <CourseInstructor>
                            <CourseInstructorProfilePic
                                src={instructor.profilePic}
                            />
                            <CourseInstructorNamePosition>
                                <CourseInstructorName>
                                    by {instructor.name}
                                </CourseInstructorName>
                                <CourseInstructorPosition>
                                    Mentor
                                </CourseInstructorPosition>
                            </CourseInstructorNamePosition>
                        </CourseInstructor>
                        <CourseRating>
                            <CourseRatingStarIcon>
                                <AiFillStar />
                            </CourseRatingStarIcon>
                            <CourseRatingContent>
                                ({rating})
                            </CourseRatingContent>
                        </CourseRating>
                    </CourseInstructorRating>
                    <CourseFeatures>
                        <CourseFeature>
                            <CourseFeatureIcon>
                                <BsFileEarmarkPdf />
                            </CourseFeatureIcon>
                            <CourseFeatureContent>
                                PDFs and resources
                            </CourseFeatureContent>
                        </CourseFeature>
                        <CourseFeature>
                            <CourseFeatureIcon>
                                <BsCameraVideo />
                            </CourseFeatureIcon>
                            <CourseFeatureContent>
                                {isLive ? "live" : "recorded"} course
                            </CourseFeatureContent>
                        </CourseFeature>
                    </CourseFeatures>
                </CourseDetailsContent>

                <ViewMoreCourseLength>
                    <Button to={`/courses/${id}`}>View more</Button>
                    <CourseFeature>
                        <CourseFeatureIcon>
                            <IoIosTimer />
                        </CourseFeatureIcon>
                        <CourseFeatureContent>{duration}</CourseFeatureContent>
                    </CourseFeature>
                </ViewMoreCourseLength>
            </CourseDetails>
        </Container>
    );
};

export default Course;
