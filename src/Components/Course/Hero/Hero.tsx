import React, { useContext, useState } from "react";
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
    PlayNow,
    PlayNowIcon,
    PlayNowContent,
    CouponText,
} from "./styles";
import { BsFillPlayFill, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import Button from "../../Global/Button/Button";
import { CourseContext } from "../../../Context/CourseContext";
// @ts-ignore
import numberWithCommas from "number-with-commas";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { motion } from "framer-motion";
import Features from "../Features/Features";

const CourseHero = () => {
    const courseDetails = useContext(CourseContext);
    const [showVideoPlayer, setShowVideoPlayer] = useState(false);
    console.log(courseDetails);
    if (!courseDetails) return null;
    return (
        <Container>
            {showVideoPlayer && (
                <VideoPlayer
                    closeVideoPlayer={() => setShowVideoPlayer(false)}
                />
            )}
            <Features />
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
                                src={courseDetails.instructor.profilePic}
                            />
                            <CourseInstructorName>
                                {courseDetails.instructor.name}
                            </CourseInstructorName>
                        </CourseInstructor>
                        <EnrollNow>
                            {/* <Button style={{ textAlign: "center" }}> */}
                            <EnrollButton
                                as={motion.a}
                                href={courseDetails.joinCourseLink}
                                target="_blank"
                                {...{
                                    initial: {
                                        opacity: 0,
                                        scale: 0.5,
                                    },
                                    whileHover: {
                                        scale: 1.1,
                                    },
                                    whileTap: {
                                        scale: 0.8,
                                    },
                                    animate: {
                                        scale: 1,
                                        opacity: 1,
                                    },
                                    transition: {
                                        default: {
                                            duration: 0.2,
                                            delay: 0,
                                        },
                                        scale: {
                                            delay: 0,
                                        },
                                    },
                                }}
                            >
                                <span>
                                    Enroll Now For{" "}
                                    {courseDetails.price.currency}
                                    {courseDetails.price.originalPrice}
                                </span>
                                <span>Starts {courseDetails.starts}</span>
                            </EnrollButton>
                            {/* </Button> */}
                            {courseDetails.financialAidAvail && (
                                <FinancialAid>
                                    Financial aid available
                                </FinancialAid>
                            )}
                        </EnrollNow>
                        <NumberOfPeopleEnrolled>
                            {typeof courseDetails.price.couponCode ===
                            "string" ? (
                                <CouponText>
                                    USE COUPON "{courseDetails.price.couponCode}
                                    "
                                </CouponText>
                            ) : (
                                <>
                                    <span>
                                        {numberWithCommas(
                                            courseDetails.totalEnrolled
                                        )}
                                    </span>{" "}
                                    already enrolled
                                </>
                            )}
                        </NumberOfPeopleEnrolled>
                    </CourseDetails>
                    <PlayNow onClick={() => setShowVideoPlayer(true)}>
                        <PlayNowIcon>
                            <BsFillPlayFill />
                        </PlayNowIcon>
                        <PlayNowContent>
                            watch
                            <br />
                            now
                        </PlayNowContent>
                    </PlayNow>
                </HeroMain>
            </Content>
        </Container>
    );
};

export default CourseHero;
