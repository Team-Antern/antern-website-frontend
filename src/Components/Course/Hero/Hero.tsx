import React from "react";
import BreadCrumbs from "../../Global/BreadCrumbs/BreadCrumbs";
import Header from "../../Global/Header/Header";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import {
    Container,
    Content,
    CourseDetails,
    CourseInstructor,
    CourseInstructorName,
    CourseInstructorProfilePic,
    CourseNumberOfRatings,
    CourseRating,
    CourseStarRating,
    CourseStarRatingContent,
    CourseTitle,
    CourseVideo,
    EnrollButton,
    EnrollNow,
    FinancialAid,
    HeroMain,
    LikeIcon,
    LikesOnCourse,
    LikesOnCourseContent,
    NumberOfPeopleEnrolled,
} from "./styles";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import Button from "../../Global/Button/Button";

const CourseHero = () => {
    return (
        <Container>
            <Content>
                <Header />
                <HeroMain>
                    <CourseDetails>
                        <BreadCrumbs
                            path={[
                                {
                                    to: "/",
                                    text: "home",
                                },
                                {
                                    to: "/courses",
                                    text: "courses",
                                },
                                {
                                    to: "/course/123",
                                    text: "course details",
                                },
                            ]}
                        />
                        <CourseTitle>core machine learning</CourseTitle>
                        <CourseRating>
                            <CourseStarRating>
                                <ReactStars
                                    size={28}
                                    count={5}
                                    color="#fff"
                                    activeColor="#de640c"
                                    edit={false}
                                    value={5}
                                    isHalf={true}
                                    emptyIcon={<BsStar />}
                                    halfIcon={<BsStarHalf />}
                                    filledIcon={<BsStarFill />}
                                />
                                <CourseStarRatingContent>
                                    5.0
                                </CourseStarRatingContent>
                            </CourseStarRating>
                            <CourseNumberOfRatings>
                                20,454 ratings
                            </CourseNumberOfRatings>
                            <LikesOnCourse>
                                <LikeIcon>
                                    <AiFillLike />
                                </LikeIcon>
                                <LikesOnCourseContent>97%</LikesOnCourseContent>
                            </LikesOnCourse>
                        </CourseRating>
                        <CourseInstructor>
                            <CourseInstructorProfilePic src="https://bit.ly/3iFDcYj" />
                            <CourseInstructorName>
                                ayush singh
                            </CourseInstructorName>
                        </CourseInstructor>
                        <EnrollNow>
                            <Button style={{ textAlign: "center" }}>
                                <EnrollButton>
                                    <span>Enroll for free</span>
                                    <span>Starts Dec 1</span>
                                </EnrollButton>
                            </Button>
                            <FinancialAid>Financial aid available</FinancialAid>
                        </EnrollNow>
                        <NumberOfPeopleEnrolled>
                            <span>511,324</span> already enrolled
                        </NumberOfPeopleEnrolled>
                    </CourseDetails>
                    <CourseVideo></CourseVideo>
                </HeroMain>
            </Content>
        </Container>
    );
};

export default CourseHero;
