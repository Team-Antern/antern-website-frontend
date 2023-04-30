import React, { useContext, useEffect, useState } from "react";
import Review from "../Review/Review";
import {
    Heading,
    Container,
    Content,
    HeadingUnderline,
    LoveSymbol,
    DownArrow,
} from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css/effect-coverflow";
import "swiper/css";
import { SwiperDot, SwiperDots } from "../../../globalStyles";
import sw from "swiper";
import { CourseContext } from "../../../Context/CourseContext";

const Reviews = () => {
    const courseDetails = useContext(CourseContext);
    const [swiper, setSwiper] = useState<sw | null>(null);
    const [slidesPerView, setSlidesPerView] = useState(2);
    const [activeSlide, setActiveSlide] = useState(0);
    useEffect(() => {
        const decideAndSetSlidesPerView = () => {
            if (window.innerWidth > 1000) setSlidesPerView(2);
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
            <Heading>
                This is why students{" "}
                <LoveSymbol src="/assets/heart.svg" draggable={false} /> love
                antern
                <HeadingUnderline
                    src="/assets/heading-underline.svg"
                    draggable={false}
                />
                <DownArrow src="/assets/down-arrow.svg" draggable={false} />
            </Heading>
            <Content>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 40,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    spaceBetween={50}
                    slidesPerView={slidesPerView}
                    onSlideChange={(swiper) =>
                        setActiveSlide(swiper.activeIndex)
                    }
                    loopFillGroupWithBlank
                    onSwiper={(swiper) => setSwiper(swiper)}
                    modules={[EffectCoverflow]}
                >
                    {courseDetails.reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <Review
                                review={review}
                                active={activeSlide === index}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* <SwiperDots>
                    {courseDetails.reviews.map((review, index) =>
                        index % slidesPerView === 0 ? (
                            <SwiperDot
                                onClick={() => swiper?.slideTo(index)}
                                key={index}
                                isActive={index === activeSlide}
                            />
                        ) : null
                    )}
                </SwiperDots> */}
            </Content>
        </Container>
    );
};

export default Reviews;
