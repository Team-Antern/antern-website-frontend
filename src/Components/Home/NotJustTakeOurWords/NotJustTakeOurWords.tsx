import React, { useEffect, useState } from "react";
import {
    Background,
    Container,
    Content,
    Heading,
    SlideControls,
} from "./styles";
import { SlideControl } from "../../../globalStyles";
import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";
import NotJustTakeOurWordsCard from "../NotJustTakeOurWordsCard/NotJustTakeOurWordsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { default as sw } from "swiper";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import AnimateOnVisible from "../../Global/AnimateOnVisible/AnimateOnVisible";
import { motion } from "framer-motion";

const notJustTakeOurWordsCards = [
    {
        profilePic:
            "https://media.licdn.com/dms/image/D4D03AQEC7NXN2_XGug/profile-displayphoto-shrink_800_800/0/1665493308669?e=1676505600&v=beta&t=EBIs4-3Kwk7OeJyjt48RZn2okNeMQj85NjramNYzVmk",
        name: "Ayush Singh",
        company: "./assets/amazon.png",
        review: "I found Priyanshu's course to be the foundation for my knowledge of Unity's platform and C# scripting as it was the first one I followed.",
        socials: [
            {
                icon: <AiFillTwitterCircle />,
                link: "https://twitter.com/",
            },
            {
                icon: <AiFillLinkedin />,
                link: "https://linkedin.com/",
            },
        ],
    },
    {
        profilePic:
            "https://media.licdn.com/dms/image/D4D03AQEC7NXN2_XGug/profile-displayphoto-shrink_800_800/0/1665493308669?e=1676505600&v=beta&t=EBIs4-3Kwk7OeJyjt48RZn2okNeMQj85NjramNYzVmk",
        name: "Ayush Singh",
        company: "./assets/amazon.png",
        review: "I found Priyanshu's course to be the foundation for my knowledge of Unity's platform and C# scripting as it was the first one I followed.",
        socials: [
            {
                icon: <AiFillTwitterCircle />,
                link: "https://twitter.com/",
            },
            {
                icon: <AiFillLinkedin />,
                link: "https://linkedin.com/",
            },
        ],
    },
    {
        profilePic:
            "https://media.licdn.com/dms/image/D4D03AQEC7NXN2_XGug/profile-displayphoto-shrink_800_800/0/1665493308669?e=1676505600&v=beta&t=EBIs4-3Kwk7OeJyjt48RZn2okNeMQj85NjramNYzVmk",
        name: "Ayush Singh",
        company: "./assets/amazon.png",
        review: "I found Priyanshu's course to be the foundation for my knowledge of Unity's platform and C# scripting as it was the first one I followed.",
        socials: [
            {
                icon: <AiFillTwitterCircle />,
                link: "https://twitter.com/",
            },
            {
                icon: <AiFillLinkedin />,
                link: "https://linkedin.com/",
            },
        ],
    },
    {
        profilePic:
            "https://media.licdn.com/dms/image/D4D03AQEC7NXN2_XGug/profile-displayphoto-shrink_800_800/0/1665493308669?e=1676505600&v=beta&t=EBIs4-3Kwk7OeJyjt48RZn2okNeMQj85NjramNYzVmk",
        name: "Ayush Singh",
        company: "./assets/amazon.png",
        review: "I found Priyanshu's course to be the foundation for my knowledge of Unity's platform and C# scripting as it was the first one I followed.",
        socials: [
            {
                icon: <AiFillTwitterCircle />,
                link: "https://twitter.com/",
            },
            {
                icon: <AiFillLinkedin />,
                link: "https://linkedin.com/",
            },
        ],
    },
    {
        profilePic:
            "https://media.licdn.com/dms/image/D4D03AQEC7NXN2_XGug/profile-displayphoto-shrink_800_800/0/1665493308669?e=1676505600&v=beta&t=EBIs4-3Kwk7OeJyjt48RZn2okNeMQj85NjramNYzVmk",
        name: "Ayush Singh",
        company: "./assets/amazon.png",
        review: "I found Priyanshu's course to be the foundation for my knowledge of Unity's platform and C# scripting as it was the first one I followed.",
        socials: [
            {
                icon: <AiFillTwitterCircle />,
                link: "https://twitter.com/",
            },
            {
                icon: <AiFillLinkedin />,
                link: "https://linkedin.com/",
            },
        ],
    },
    {
        profilePic:
            "https://media.licdn.com/dms/image/D4D03AQEC7NXN2_XGug/profile-displayphoto-shrink_800_800/0/1665493308669?e=1676505600&v=beta&t=EBIs4-3Kwk7OeJyjt48RZn2okNeMQj85NjramNYzVmk",
        name: "Ayush Singh",
        company: "./assets/amazon.png",
        review: "I found Priyanshu's course to be the foundation for my knowledge of Unity's platform and C# scripting as it was the first one I followed.",
        socials: [
            {
                icon: <AiFillTwitterCircle />,
                link: "https://twitter.com/",
            },
            {
                icon: <AiFillLinkedin />,
                link: "https://linkedin.com/",
            },
        ],
    },
    {
        profilePic:
            "https://media.licdn.com/dms/image/D4D03AQEC7NXN2_XGug/profile-displayphoto-shrink_800_800/0/1665493308669?e=1676505600&v=beta&t=EBIs4-3Kwk7OeJyjt48RZn2okNeMQj85NjramNYzVmk",
        name: "Ayush Singh",
        company: "./assets/amazon.png",
        review: "I found Priyanshu's course to be the foundation for my knowledge of Unity's platform and C# scripting as it was the first one I followed.",
        socials: [
            {
                icon: <AiFillTwitterCircle />,
                link: "https://twitter.com/",
            },
            {
                icon: <AiFillLinkedin />,
                link: "https://linkedin.com/",
            },
        ],
    },
];

const NotJustTakeOurWords = React.forwardRef<HTMLDivElement>(({}, ref) => {
    const [swiper, setSwiper] = useState({
        isBeginning: true,
        isEnd: true,
        slidePrev: () => {},
        slideNext: () => {},
    });
    const [slidesPerView, setSlidesPerView] = useState(3);
    useEffect(() => {
        const decideAndSetSlidesPerView = () => {
            if (window.innerWidth > 1300) setSlidesPerView(3);
            else if (window.innerWidth <= 1300 && window.innerWidth > 760)
                setSlidesPerView(2);
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
        <AnimateOnVisible as={motion.div}>
            <Container ref={ref}>
                <Background />
                <Heading>not just take our words</Heading>
                <Content>
                    <Swiper
                        onSwiper={onSwiperAndIndexChange}
                        onActiveIndexChange={onSwiperAndIndexChange}
                        slidesPerView={slidesPerView}
                        spaceBetween={40}
                    >
                        {notJustTakeOurWordsCards.map(
                            (notJustTakeOurWordsCard, index) => (
                                <SwiperSlide key={index}>
                                    <NotJustTakeOurWordsCard
                                        {...notJustTakeOurWordsCard}
                                    />
                                </SwiperSlide>
                            )
                        )}
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
            </Container>
        </AnimateOnVisible>
    );
});

export default React.memo(NotJustTakeOurWords);
