import React from "react";
import {
    Container,
    Feature,
    FeatureDesc,
    FeatureHeading,
    FeaturesSeperator,
    WithSwiper,
    WithoutSwiper,
} from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext } from "react";
import { CourseContext } from "../../../Context/CourseContext";

const Features = () => {
    const courseDetails = useContext(CourseContext);
    if (!courseDetails) return null;
    return (
        <Container>
            <WithoutSwiper>
                {courseDetails.features.map(({ heading, desc }, index) => (
                    <React.Fragment key={index}>
                        <Feature>
                            <FeatureHeading>{heading}</FeatureHeading>
                            <FeatureDesc>{desc}</FeatureDesc>
                        </Feature>
                        {courseDetails.features.length - 1 !== index && (
                            <FeaturesSeperator />
                        )}
                    </React.Fragment>
                ))}
            </WithoutSwiper>
            <WithSwiper>
                <Swiper>
                    {courseDetails.features.map(({ heading, desc }, index) => (
                        <SwiperSlide key={index}>
                            <Feature>
                                <FeatureHeading>{heading}</FeatureHeading>
                                <FeatureDesc>{desc}</FeatureDesc>
                            </Feature>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </WithSwiper>
        </Container>
    );
};

export default Features;
