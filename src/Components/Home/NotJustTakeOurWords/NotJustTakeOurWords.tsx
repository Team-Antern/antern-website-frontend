import React, { useState } from "react";
import { Container, Content, Heading, SlideControls } from "./styles";
import { SlideControl } from "../../../globalStyles";
import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";
import NotJustTakeOurWordsCard from "../NotJustTakeOurWordsCard/NotJustTakeOurWordsCard";
import { Swiper } from "swiper/react";
// import swiper

const NotJustTakeOurWords = () => {
    // const [swiper, setSwiper] = useState({
    //     isBeginning: true,
    //     isEnd: true,
    //     slidePrev: () => {},
    //     slideNext: () => {},
    // });
    // const onSwiperAndIndexChange = (swiper: sw) => {
    //     const { isBeginning, isEnd, slidePrev, slideNext } = swiper;
    //     setSwiper({
    //         isBeginning,
    //         isEnd,
    //         slidePrev: slidePrev.bind(swiper),
    //         slideNext: slideNext.bind(swiper),
    //     });
    // };
    return (
        <Container>
            {/* <Heading>not just take our words</Heading>
            <Content>
                <Swiper onSwiper={onSwiperAndIndexChange}>
                    <NotJustTakeOurWordsCard />
                </Swiper>
            </Content>
            <SlideControls>
                <SlideControl
                    isDisabled={swiper.isEnd}
                    onClick={() => swiper.slidePrev()}
                >
                    <RxTriangleLeft />
                </SlideControl>
                <SlideControl
                    isDisabled={swiper.isEnd}
                    onClick={() => swiper.slideNext()}
                >
                    <RxTriangleRight />
                </SlideControl>
            </SlideControls> */}
        </Container>
    );
};

export default NotJustTakeOurWords;
