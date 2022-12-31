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

interface FeaturesProps {
    data: {
        heading: string;
        desc: string;
    }[];
}

const Features = ({ data }: FeaturesProps) => {
    return (
        <Container>
            <WithoutSwiper>
                {data.map(({ heading, desc }, index) => (
                    <React.Fragment key={index}>
                        <Feature>
                            <FeatureHeading>{heading}</FeatureHeading>
                            <FeatureDesc>{desc}</FeatureDesc>
                        </Feature>
                        {data.length - 1 !== index && <FeaturesSeperator />}
                    </React.Fragment>
                ))}
            </WithoutSwiper>
            <WithSwiper>
                <Swiper>
                    {data.map(({ heading, desc }, index) => (
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
