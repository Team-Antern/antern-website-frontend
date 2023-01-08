import React, { useContext } from "react";
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
    EnrollButton,
    EnrollNow,
    FinancialAid,
    HeroMain,
    LikeIcon,
    LikesOnCourse,
    LikesOnCourseContent,
    NumberOfPeopleEnrolled,
    CourseImage,
} from "./styles";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import Button from "../../Global/Button/Button";
import { CourseContext } from "../../../Context/CourseContext";
// @ts-ignore
import numberWithCommas from "number-with-commas";

const CourseHero = () => {
    const courseDetails = useContext(CourseContext);
    if (!courseDetails) return null;
    return (
        <Container>
            <Content>
                <Header />
                <HeroMain>
                    <CourseImage src={courseDetails.coverImage} />
                    <CourseDetails>
                        <BreadCrumbs
                            path={[
                                {
                                    to: "/",
                                    text: "home",
                                },
                                {
                                    to: "/courses/",
                                    text: "courses",
                                },
                                {
                                    to: "/courses/123/",
                                    text: "course details",
                                },
                            ]}
                        />
                        <CourseTitle>{courseDetails.title}</CourseTitle>
                        <CourseRating>
                            <CourseStarRating>
                                <ReactStars
                                    size={28}
                                    count={5}
                                    color="#fff"
                                    activeColor="#de640c"
                                    edit={false}
                                    value={courseDetails.rating.stars}
                                    isHalf={true}
                                    emptyIcon={<BsStar />}
                                    halfIcon={<BsStarHalf />}
                                    filledIcon={<BsStarFill />}
                                />
                                <CourseStarRatingContent>
                                    {courseDetails.rating.stars}
                                </CourseStarRatingContent>
                            </CourseStarRating>
                            <CourseNumberOfRatings>
                                {numberWithCommas(courseDetails.rating.total)}{" "}
                                ratings
                            </CourseNumberOfRatings>
                            {/* <LikesOnCourse>
                                <LikeIcon>
                                    <AiFillLike />
                                </LikeIcon>
                                <LikesOnCourseContent>97%</LikesOnCourseContent>
                            </LikesOnCourse> */}
                        </CourseRating>
                        <CourseInstructor>
                            <CourseInstructorProfilePic
                                src={courseDetails.instructors[0].profilePic}
                            />
                            <CourseInstructorName>
                                {courseDetails.instructors[0].name}
                            </CourseInstructorName>
                        </CourseInstructor>
                        <EnrollNow>
                            <Button style={{ textAlign: "center" }}>
                                <EnrollButton>
                                    <span>
                                        Enroll Now For ₹{courseDetails.price}
                                    </span>
                                    <span>Starts {courseDetails.starts}</span>
                                </EnrollButton>
                            </Button>
                            {courseDetails.financialAidAvail && (
                                <FinancialAid>
                                    Financial aid available
                                </FinancialAid>
                            )}
                        </EnrollNow>
                        <NumberOfPeopleEnrolled>
                            <span>
                                {numberWithCommas(courseDetails.totalEnrolled)}
                            </span>{" "}
                            already enrolled
                        </NumberOfPeopleEnrolled>
                    </CourseDetails>
                </HeroMain>
            </Content>
        </Container>
    );
};

export default CourseHero;
