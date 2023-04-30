import React, { useContext } from "react";
import {
    Container,
    Content,
    Heading,
    HeadingHighlight,
    Step,
    StepDesc,
    StepHeading,
    StepNumber,
} from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { CourseContext } from "../../../Context/CourseContext";

const YourWayToGetSuccess = () => {
    const courseDetails = useContext(CourseContext);
    if (!courseDetails) return null;
    return (
        <Container>
            <Heading>
                your way to getting successful
                <HeadingHighlight src="/assets/heading-highlight.svg" />
            </Heading>
            <Content>
                <Swiper slidesPerView="auto" loopFillGroupWithBlank>
                    {courseDetails.wayToGetSuccessfull.map(
                        ({ heading, desc }, index) => (
                            <SwiperSlide
                                style={{
                                    width: "auto",
                                }}
                                key={index}
                            >
                                <Step index={index}>
                                    <StepNumber>{index + 1}</StepNumber>
                                    <StepHeading>{heading}</StepHeading>
                                    <StepDesc>{desc}</StepDesc>
                                </Step>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </Content>
        </Container>
    );
};

export default YourWayToGetSuccess;
