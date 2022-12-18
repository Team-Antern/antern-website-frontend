import React, { useState } from "react";
import {
    Container,
    Content,
    Desc,
    Heading,
    Subtitle,
    SubtitleHeadingDesc,
} from "./styles";
import { SlideControl } from "../../../globalStyles";
import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";
import PremiumBenefit from "../PremiumBenefit/PremiumBenefit";
import { Swiper, SwiperSlide } from "swiper/react";
import { default as sw } from "swiper";

const PremiumBenefits = () => {
    const [swiper, setSwiper] = useState({
        isBeginning: true,
        isEnd: false,
        slidePrev: () => {},
        slideNext: () => {},
    });
    const onSwiperAndIndexChange = (swiper: sw) => {
        const { isBeginning, isEnd, slidePrev, slideNext } = swiper;
        setSwiper({
            isBeginning,
            isEnd,
            slidePrev: slidePrev.bind(swiper),
            slideNext: slideNext.bind(swiper),
        });
    };
    return (
        <Container>
            <SubtitleHeadingDesc>
                <Subtitle>choose your course & start with antern</Subtitle>
                <Heading>premium benefits</Heading>
                <Desc>
                    Physical Specially designed Learning Kits for each courses.
                    for example for "Machine Learning Course", we provide a
                    fully package.
                </Desc>
            </SubtitleHeadingDesc>
            <Content>
                <SlideControl
                    isDisabled={swiper.isBeginning}
                    onClick={() => swiper.slidePrev()}
                >
                    <RxTriangleLeft />
                </SlideControl>
                <Swiper
                    onSwiper={onSwiperAndIndexChange}
                    onActiveIndexChange={onSwiperAndIndexChange}
                    slidesPerView={2}
                    spaceBetween={30}
                >
                    <SwiperSlide>
                        <PremiumBenefit />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PremiumBenefit />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PremiumBenefit />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PremiumBenefit />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PremiumBenefit />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PremiumBenefit />
                    </SwiperSlide>
                </Swiper>
                <SlideControl
                    isDisabled={swiper.isEnd}
                    onClick={() => swiper.slideNext()}
                >
                    <RxTriangleRight />
                </SlideControl>
            </Content>
        </Container>
    );
};

export default PremiumBenefits;
