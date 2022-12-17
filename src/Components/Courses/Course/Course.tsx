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

const Course = () => {
    return (
        <Container>
            <CourseImage src="https://i.ytimg.com/vi/hjh1ikznScg/maxresdefault.jpg" />
            <CourseDetails>
                <CourseTitle>Core Machine Learning</CourseTitle>
                <CourseInstructorRating>
                    <CourseInstructor>
                        <CourseInstructorProfilePic src="https://bit.ly/3iFDcYj" />
                        <CourseInstructorNamePosition>
                            <CourseInstructorName>
                                By Ayush Singh
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
                        <CourseRatingContent>(4.9)</CourseRatingContent>
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
                            recorded course
                        </CourseFeatureContent>
                    </CourseFeature>
                </CourseFeatures>
                <ViewMoreCourseLength>
                    <Button>View more</Button>
                    <CourseFeature>
                        <CourseFeatureIcon>
                            <IoIosTimer />
                        </CourseFeatureIcon>
                        <CourseFeatureContent>2 months</CourseFeatureContent>
                    </CourseFeature>
                </ViewMoreCourseLength>
            </CourseDetails>
        </Container>
    );
};

export default Course;
