import React, { useState } from "react";
import {
    Container,
    Instructor,
    InstructorAbout,
    InstructorName,
    InstructorPosition,
    InstructorProfilePic,
    SlideControl,
} from "./styles";
import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { default as sw } from "swiper";

const instructors = [
    {
        profilePic:
            "https://media.licdn.com/dms/image/D4D03AQEC7NXN2_XGug/profile-displayphoto-shrink_800_800/0/1665493308669?e=1676505600&v=beta&t=EBIs4-3Kwk7OeJyjt48RZn2okNeMQj85NjramNYzVmk",
        name: "ayush singh",
        position: "python, data science",
        about: "The Atlas Fellowship’s unique emphasis on casual discussion and individual thinking was at once invigorating, exhilarating, and inspiring. The fascinating concepts I learned and debated with my peers in this community led me on pathway to impacts that I've always wanted to make.",
    },
    {
        profilePic:
            "https://media.licdn.com/dms/image/D4D03AQEC7NXN2_XGug/profile-displayphoto-shrink_800_800/0/1665493308669?e=1676505600&v=beta&t=EBIs4-3Kwk7OeJyjt48RZn2okNeMQj85NjramNYzVmk",
        name: "ayush singh",
        position: "python, data science",
        about: "The Atlas Fellowship’s unique emphasis on casual discussion and individual thinking was at once invigorating, exhilarating, and inspiring. The fascinating concepts I learned and debated with my peers in this community led me on pathway to impacts that I've always wanted to make.",
    },
    {
        profilePic:
            "https://media.licdn.com/dms/image/D4D03AQEC7NXN2_XGug/profile-displayphoto-shrink_800_800/0/1665493308669?e=1676505600&v=beta&t=EBIs4-3Kwk7OeJyjt48RZn2okNeMQj85NjramNYzVmk",
        name: "ayush singh",
        position: "python, data science",
        about: "The Atlas Fellowship’s unique emphasis on casual discussion and individual thinking was at once invigorating, exhilarating, and inspiring. The fascinating concepts I learned and debated with my peers in this community led me on pathway to impacts that I've always wanted to make.",
    },
];

const Instructors = () => {
    const [swiper, setSwiper] = useState<sw | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <Container>
            <SlideControl
                isDisabled={activeIndex === 0}
                onClick={() =>
                    Object.getPrototypeOf(swiper).slidePrev.apply(swiper)
                }
            >
                <RxTriangleLeft />
            </SlideControl>
            <Swiper
                onSwiper={setSwiper}
                onActiveIndexChange={({ activeIndex }) =>
                    setActiveIndex(activeIndex)
                }
            >
                {instructors.map(
                    ({ profilePic, name, position, about }, index) => (
                        <SwiperSlide key={index}>
                            <Instructor>
                                <InstructorProfilePic src={profilePic} />
                                <InstructorName>{name}</InstructorName>
                                <InstructorPosition>
                                    {position}
                                </InstructorPosition>
                                <InstructorAbout>{about}</InstructorAbout>
                            </Instructor>
                        </SwiperSlide>
                    )
                )}
            </Swiper>
            <SlideControl
                isDisabled={activeIndex === instructors.length - 1}
                onClick={() =>
                    Object.getPrototypeOf(swiper).slideNext.apply(swiper)
                }
            >
                <RxTriangleRight />
            </SlideControl>
        </Container>
    );
};

export default Instructors;
