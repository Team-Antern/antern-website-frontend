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
} from "./styles";
import { AiFillStar } from "react-icons/ai";
import { IoIosTimer } from "react-icons/io";
import Button from "../../Global/Button/Button";
import { BsCameraVideo, BsFileEarmarkPdf } from "react-icons/bs";
import { Course as CourseInterface } from "../../../Pages/Courses/Courses";

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
        <Container>
            <CourseImage src={courseBanner} />
            <CourseDetails>
                <CourseTitle>{title}</CourseTitle>
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
                        <CourseRatingContent>({rating})</CourseRatingContent>
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
