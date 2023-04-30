import React, { useContext } from "react";
import {
    Container,
    Content,
    CouponCode,
    CourseTitle,
    CourseTitleStudentsEnrolled,
    DiscountedPrice,
    EnrollNow,
    EnrollNowPrice,
    OriginalPrice,
    OriginalPriceCouponCode,
    Price,
    Student,
    Students,
    StudentsEnrolled,
    StudentsEnrolledContent,
} from "./styles";
import Button from "../../Global/Button/Button";
import { BsArrowRight } from "react-icons/bs";
import { CourseContext } from "../../../Context/CourseContext";

const students = [
    "https://ik.imagekit.io/jprbxp6m21m/pfp/ayush__sD-SdRaR.webp",
    "https://ik.imagekit.io/jprbxp6m21m/pfp/ayush__sD-SdRaR.webp",
    "https://ik.imagekit.io/jprbxp6m21m/pfp/ayush__sD-SdRaR.webp",
];

const Pricing = () => {
    const courseDetails = useContext(CourseContext);
    if (!courseDetails) return null;
    return (
        <Container>
            <Content>
                <CourseTitleStudentsEnrolled>
                    <CourseTitle>{courseDetails.title}</CourseTitle>
                    <StudentsEnrolled>
                        <Students left={students.length / 2}>
                            {students.map((student, index) => (
                                <Student
                                    key={index}
                                    index={index}
                                    src={student}
                                />
                            ))}
                        </Students>
                        <StudentsEnrolledContent>
                            {courseDetails.totalEnrolled}+ already enrolled
                        </StudentsEnrolledContent>
                    </StudentsEnrolled>
                </CourseTitleStudentsEnrolled>
                <EnrollNowPrice>
                    <EnrollNow>
                        <Button
                            style={{
                                textTransform: "capitalize",
                                borderRadius: "5rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.8rem",
                            }}
                            animationProps={{}}
                            href={courseDetails.joinCourseLink}
                        >
                            enroll now
                            <BsArrowRight />
                        </Button>
                    </EnrollNow>
                    <Price>
                        <OriginalPriceCouponCode>
                            <OriginalPrice>
                                {courseDetails.price.currency}
                                {courseDetails.price.originalPrice}
                            </OriginalPrice>
                            <CouponCode>
                                {courseDetails.price.couponCode}
                            </CouponCode>
                        </OriginalPriceCouponCode>
                        <DiscountedPrice>
                            {courseDetails.price.currency}
                            {courseDetails.price.discountedPrice}
                        </DiscountedPrice>
                    </Price>
                </EnrollNowPrice>
            </Content>
        </Container>
    );
};

export default Pricing;
