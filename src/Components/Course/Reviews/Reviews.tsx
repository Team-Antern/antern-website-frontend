import React, { useContext, useEffect, useState } from "react";
import Review from "../Review/Review";
import { Heading, Container, Content } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SwiperDot, SwiperDots } from "../../../globalStyles";
import sw from "swiper";
import { CourseContext } from "../../../Context/CourseContext";

const Reviews = () => {
    const courseDetails = useContext(CourseContext);
    const [swiper, setSwiper] = useState<sw | null>(null);
    const [slidesPerView, setSlidesPerView] = useState(3);
    const [activeSlide, setActiveSlide] = useState(0);
    useEffect(() => {
        const decideAndSetSlidesPerView = () => {
            if (window.innerWidth > 1000) setSlidesPerView(3);
            else if (window.innerWidth <= 1000 && window.innerWidth > 640)
                setSlidesPerView(2);
            else setSlidesPerView(1);
        };
        decideAndSetSlidesPerView();
        window.addEventListener("resize", decideAndSetSlidesPerView);
        return () =>
            window.removeEventListener("resize", decideAndSetSlidesPerView);
    }, []);
    if (!courseDetails) return null;
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
                    {courseDetails.reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <Review review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <SwiperDots>
                    {courseDetails.reviews.map((review, index) =>
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
