import React, { useState } from "react";
import Review from "../Review/Review";
import { Heading, Container, Content } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SwiperDot, SwiperDots } from "../../../globalStyles";
import sw from "swiper";

const Reviews = () => {
    const [swiper, setSwiper] = useState<sw | null>(null);
    const [slidesPerView, setSlidesPerView] = useState(3);
    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <Container>
            <Heading>not just take our words</Heading>
            <Content>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={slidesPerView}
                    slidesPerGroup={slidesPerView}
                    onSlideChange={(swiper) =>
                        setActiveSlide(swiper.activeIndex)
                    }
                    loopFillGroupWithBlank
                    onSwiper={(swiper) => setSwiper(swiper)}
                >
                    {Array.from(Array(10).keys()).map((review, index) => (
                        <SwiperSlide key={index}>
                            <Review />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <SwiperDots>
                    {Array.from(Array(10).keys()).map((review, index) =>
                        index % slidesPerView === 0 ? (
                            <SwiperDot
                                onClick={() => swiper?.slideTo(index)}
                                key={index}
                                isActive={index === activeSlide}
                            />
                        ) : null
                    )}
                </SwiperDots>
            </Content>
        </Container>
    );
};

export default Reviews;
