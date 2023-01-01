import React, { useState } from "react";
import {
    Container,
    Content,
    Instructor,
    InstructorAbout,
    InstructorName,
    InstructorPosition,
    InstructorProfilePic,
    InstructorProfilePicName,
} from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { default as sw } from "swiper";
import { SlideControl2 } from "../../../globalStyles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
            <SlideControl2
                isDisabled={activeIndex === 0}
                onClick={() =>
                    Object.getPrototypeOf(swiper).slidePrev.apply(swiper)
                }
            >
                <FaChevronLeft />
            </SlideControl2>
            <Content>
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
                                    <InstructorProfilePicName>
                                        <InstructorProfilePic
                                            src={profilePic}
                                        />
                                        <InstructorName>{name}</InstructorName>
                                    </InstructorProfilePicName>
                                    <InstructorAbout>{about}</InstructorAbout>
                                </Instructor>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </Content>
            <SlideControl2
                isDisabled={activeIndex === instructors.length - 1}
                onClick={() =>
                    Object.getPrototypeOf(swiper).slideNext.apply(swiper)
                }
            >
                <FaChevronRight />
            </SlideControl2>
        </Container>
    );
};

export default Instructors;
