import React, { useEffect, useState } from "react";
import {
  Container,
  Content,
  ContentWrapper,
  Desc,
  Heading,
  SlideControls,
  Subtitle,
  SubtitleHeadingDesc,
} from "./styles";
import { SlideControl } from "../../../globalStyles";
import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";
import PremiumBenefit from "../PremiumBenefit/PremiumBenefit";
import { Swiper, SwiperSlide } from "swiper/react";
import { default as sw } from "swiper";
import AnimateOnVisible from "../../Global/AnimateOnVisible/AnimateOnVisible";
import { motion } from "framer-motion";

const benifits = [
  {
    icon: "",
    title: "Monetize your skill",
    body: "Make money while you learn with Antern's opportunities to monetize your skills.",
  },
  {
    icon: "",
    title: "Production Grade Projects",
    body: "Gain real-world experience and build your unique portfolio with our production grade projects.",
  },
  {
    icon: "",
    title: "Write your own research paper",
    body: "Take your learning to the next level with our opportunity to write and publish your own research paper.",
  },
  {
    icon: "",
    title: "Assesments",
    body: "Enhance your learning experience with our comprehensive learning materials, including lecture notes, e-books, and assignments.",
  },
];

const PremiumBenefits = React.forwardRef<HTMLDivElement>(({}, ref) => {
  const [swiper, setSwiper] = useState({
    isBeginning: true,
    isEnd: false,
    slidePrev: () => {},
    slideNext: () => {},
  });
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    const decideAndSetSlidesPerView = () => {
      if (window.innerWidth > 1240) setSlidesPerView(2);
      else setSlidesPerView(1);
    };
    decideAndSetSlidesPerView();
    window.addEventListener("resize", decideAndSetSlidesPerView);
    return () =>
      window.removeEventListener("resize", decideAndSetSlidesPerView);
  }, []);
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
    <Container ref={ref}>
      <AnimateOnVisible as={motion.div}>
        <SubtitleHeadingDesc>
          <Subtitle>choose your course & start with antern</Subtitle>
          <Heading>premium benefits</Heading>
          <Desc>
            Unlock your full potential with Antern's premium benefits, including
            monetizing your skill and writing your own research paper.
          </Desc>
        </SubtitleHeadingDesc>
      </AnimateOnVisible>
      <ContentWrapper>
        <Content
          as={motion.div}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={{
            offscreen: {
              y: 300,
            },
            onscreen: {
              y: 0,
              transition: {
                type: "ease-in",
              },
            },
          }}
        >
          <Swiper
            onSwiper={onSwiperAndIndexChange}
            onActiveIndexChange={onSwiperAndIndexChange}
            slidesPerView={slidesPerView}
            spaceBetween={30}
          >
            {benifits.map(({ icon, title, body }, index) => (
              <SwiperSlide>
                <PremiumBenefit icon={icon} title={title} body={body} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Content>
        <SlideControls>
          <SlideControl
            isDisabled={swiper.isBeginning}
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
        </SlideControls>
      </ContentWrapper>
    </Container>
  );
});

export default React.memo(PremiumBenefits);
