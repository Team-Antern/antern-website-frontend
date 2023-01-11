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
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5081c136-4537-40df-b635-3d944842bbfb/1641212967360.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230110T131009Z&X-Amz-Expires=86400&X-Amz-Signature=1039b2b6c280b45d38f71e65cadb0496b731799dc7c5869067278d0390ac9670&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%221641212967360.jpeg%22&x-id=GetObject",
        name: "Kirti Goyal",
        company: "./assets/amazon.png",
        review: "I completed Antern's course on machine learning and it was an incredible experience. As a beginner, I had tried several other courses and resources but none provided the in-depth understanding of ML algorithms and their mathematical foundations like this course did. Ayush, the instructor, is an exceptional teacher who not only thoroughly explains the concepts, but also guides students through real-world projects and provides valuable career support and freelancing gigs to students. Thanks to his guidance, I was able to secure an internship at Google and feel confident in my skills as a machine learning engineer. I highly recommend this course to anyone looking to get a strong foundation in ML. ",
        socials: [
            {
                icon: <AiFillLinkedin />,
                link: "https://www.linkedin.com/in/kirti-goyal-1809ba204/",
            },
        ],
    },
    {
        profilePic:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0cafd180-586e-4804-84fc-120e970a7ee7/1668865937522.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230110T131115Z&X-Amz-Expires=86400&X-Amz-Signature=1af4fe032f04ccd226b0d30dadd4f9bc3a96a99dd236c5ac4d7705798c0d1b7e&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%221668865937522.jpeg%22&x-id=GetObject",
        name: "Tejas",
        company: "./assets/amazon.png",
        review: "It's been an incredible journey since I joined CS001-B03 in November. I met so many talented people, especially Ayush Singh, and joined as a Software Engineering Intern at Antern on November 24th. Fast forward to today, 8 Jan 2023, and I am thrilled to have received my first-ever Paycheque from a freelancing gig - all thanks to Ayush's mentorship and guidance.",
        socials: [
            {
                icon: <AiFillLinkedin />,
                link: "https://linkedin.com/",
            },
        ],
    },
    {
        profilePic:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/de2b8785-cdde-4611-9217-9882e65d53ee/1640013973559.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230110T132315Z&X-Amz-Expires=86400&X-Amz-Signature=c51dac38202a7c1ff7fee741a2db3fb180021a2b3466f83460d1631412411c37&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%221640013973559.jpeg%22&x-id=GetObject",
        name: "Tarak Ram",
        company: "./assets/amazon.png",
        review: "I was skeptical about taking an online course in Machine Learning, but Antern proved to be the perfect choice. With their quality education, affordable prices, and comprehensive resources and guidance, I was able to make the transition from an arts background to a technical field. I'm now able to understand and explain the core concepts to my classmates, and I even got a job at Antern! I'm so grateful for the opportunity to learn with Antern, and I'm now able to share my knowledge with others through my own YouTube course. ",
        socials: [
            {
                icon: <AiFillLinkedin />,
                link: "https://www.linkedin.com/in/tarakram18/",
            },
        ],
    },
    {
        profilePic:
            "data:image/jpeg;base64,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",
        name: "Harshini V Bhat",
        company: "./assets/amazon.png",
        review: "As of now I loved every bit of the course be it the in-depth lectures, assignments and the support rendered by the team looking forward for the practical implementation and more such in-depth lectures. Really very greatful for your efforts",
        socials: [
            {
                icon: <AiFillLinkedin style={{ opacity: 0 }} />,
                link: "",
            },
        ],
    },
    {
        profilePic:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/10110fdb-d28d-4388-a92f-8eedf093bf49/1638587253629.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230110T132409Z&X-Amz-Expires=86400&X-Amz-Signature=69503a495896d9361681d40d7b6df7468f2fe782af167742eb3da3d3b53107b3&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%221638587253629.jpeg%22&x-id=GetObject",
        name: "Katuri Bhanu",
        company: "./assets/amazon.png",
        review: "I would say heartfully thanks to Ayush Singh, for providing top-notch content in the Machine Learning course that no one can provide. One more quality I liked in this course was that we can resolve our doubts immediately through the discord server. I am looking forward to learning a lot more in this course.",
        socials: [
            {
                icon: <AiFillLinkedin />,
                link: "https://www.linkedin.com/in/bhanu-katuri-45237b218/",
            },
        ],
    },
    {
        profilePic:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5ca34049-62b1-4c8c-861d-67f5a6594db6/1669177909262.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230110T132656Z&X-Amz-Expires=86400&X-Amz-Signature=3718d5002adc1ea6673736fce3092996533ce9e0a65c50ad7de901ec437b224b&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%221669177909262.jpeg%22&x-id=GetObject",
        name: "Katuri Vinay Chowdary ",
        company: "./assets/amazon.png",
        review: "I was amazed by the depth of knowledge I gained from Antern's regression analysis coursework and assignments. I was able to understand the concept on a much deeper level, and the handwritten notes and intuitive videos made it easy to learn and revise. I'm so thankful for the quality and quantity of content Antern provides, and I'm grateful for the opportunity to learn with them!",
        socials: [
            {
                icon: <AiFillLinkedin />,
                link: "https://www.linkedin.com/in/katuri-vinay-911861218/",
            },
        ],
    },
    {
        profilePic:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f59b5ff1-8405-4ad0-ba9c-7a3208ce2cdd/1664315954250.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230110T134635Z&X-Amz-Expires=86400&X-Amz-Signature=ead1d781dd02ea0f8784e4ead1831e6dc3c9127d2bac04cfd3dffb97940068a0&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%221664315954250.jpeg%22&x-id=GetObject",
        name: "Soumyadarshan Dash ",
        company: "./assets/amazon.png",
        review: "I highly recommend Antern's Machine Learning course to anyone interested in learning about this topic. The material is presented in a clear and concise manner, making it easy to understand even for those who are new to the subject. The lectures are well-structured and the accompanying examples and exercises help to reinforce the concepts being taught. The instructor's ability to explain complex statistical concepts in an easy-to-understand way was especially impressive. I feel that I have gained a strong foundation in Statistics and Machine Learning and am confident in my ability to apply these techniques in my future studies and work. Antern's Machine Learning course is a great way to improve your understanding of this subject - I highly recommend it!",
        socials: [
            {
                icon: <AiFillLinkedin />,
                link: "https://www.linkedin.com/in/soumyadarshan-dash-%F0%9F%87%B3%F0%9F%87%AA-5951b9193/",
            },
        ],
    },
    {
        profilePic:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d78040c7-ead1-4649-b915-852f30e954a8/1669372494831.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230110T134735Z&X-Amz-Expires=86400&X-Amz-Signature=c2997e56fe6c69c33dc54eaee2b1b71c9980365bc08cf9baba9d23394047bb93&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%221669372494831.jpeg%22&x-id=GetObject",
        name: "Premsiva Muddam ",
        company: "./assets/amazon.png",
        review: "The course is Amazing and I am learning a lot from this course. The lectures by Ayush are interesting and not boring. You make us explore the topic more with the assignments. Meeting great people through guest lectures boost our confidence. Last but not least those chill sessions are memorable, solving doubts regarding the course, relations, and career. Thank you Ayush :)",
        socials: [
            {
                icon: <AiFillLinkedin />,
                link: "https://www.linkedin.com/in/premsiva/",
            },
        ],
    },
    {
        profilePic:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ab433772-17bc-4066-8911-858b8bec59d8/1669217710233.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230110T134829Z&X-Amz-Expires=86400&X-Amz-Signature=4d164b5407ca16edc38e70f5dab310fba36f690e581ce6d3c73449081477b88f&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%221669217710233.jpeg%22&x-id=GetObject",
        name: "Vishwas Gowda",
        company: "./assets/amazon.png",
        review: "An extremely valuable course not just for the course content but also because of the guest lecturers, assignments, community, networking and freelancing opportunities, unlike any other course. Very well done Ayush and team.",
        socials: [
            {
                icon: <AiFillLinkedin />,
                link: "https://www.linkedin.com/in/vishwas-gowda-15a9531a0/",
            },
        ],
    },
    {
        profilePic:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4bbf928f-a6eb-4af2-b532-353fcae25a2d/1666874293808.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230110T134859Z&X-Amz-Expires=86400&X-Amz-Signature=5f07c6daa816211c0e4cbcf4d064c6c72877a63b9d9be1cea0835698a3fec390&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%221666874293808.jpeg%22&x-id=GetObject",
        name: "Sriram Paranthaman",
        company: "./assets/amazon.png",
        review: "This course exceeded my expectations. Ayush is knowledgeable and approachable, and the course material was well-organized and easy to follow. Ayush and his team provided a strong foundation in the concepts and algorithms of machine learning, but also made sure to include plenty of hands-on exercises and projects to apply what we were learning. This helped me to better understand and retain the material.",
        socials: [
            {
                icon: <AiFillLinkedin />,
                link: "https://www.linkedin.com/in/sriram2k4/",
            },
        ],
    },
    {
        profilePic:
            "data:image/jpeg;base64,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",
        name: "Aniruddha Singh Tomar",
        company: "./assets/amazon.png",
        review: "The way that Ayush teaches the concept from basic to advanced is very nice . And i love the discord server where u can ask doubt , and within minutes the doubt is resolved by Ayush or by another person in discord.",
        socials: [
            {
                icon: <AiFillLinkedin style={{ opacity: 0 }} />,
                link: "",
            },
        ],
    },
    {
        profilePic:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9658d7af-f6ab-4204-a1b0-4c3cb06f2a95/1640437582488.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230110T135003Z&X-Amz-Expires=86400&X-Amz-Signature=c488caf84d71e4848b4c50acd284288ecdf85c68c46c9abd46c36c69d2bdc96d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%221640437582488.jpeg%22&x-id=GetObject",
        name: "Viswa Kiran Andraju",
        company: "./assets/amazon.png",
        review: 'The course offers great level of explanation along with crisp examples, real-time applications when required which increases the level of understanding of the concept thus cementing it in our heads. Ayush, our instructor is great example showing us "When I can do it, Why not you?" which gives us inspiration to work on.',
        socials: [
            {
                icon: <AiFillLinkedin />,
                link: "https://www.linkedin.com/in/andraju-viswa-kiran/",
            },
        ],
    },
    {
        profilePic:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/04a687bc-1d5a-4d81-8295-63a39c1fb2f7/1555005540196.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230110T135032Z&X-Amz-Expires=86400&X-Amz-Signature=ba7cef8f9658f7b78fc646b2ffc3fd301b8e7c89cace6b43912c1291307ff470&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%221555005540196.jpeg%22&x-id=GetObject",
        name: "Ganala Mohan Rao",
        company: "./assets/amazon.png",
        review: "The course is well structured and anyone having no background in the programming can easily understand.Course content is in depth and good. Course instructor(Ayush Singh) is too good and very helpful.",
        socials: [
            {
                icon: <AiFillLinkedin />,
                link: "https://www.linkedin.com/in/mohan-rao-ganala-771771168/",
            },
        ],
    },
    {
        profilePic:
            "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a74b5c10-590a-4ee5-9e5d-fa4f02d424cb/1671824951386.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230110T135128Z&X-Amz-Expires=86400&X-Amz-Signature=cd135bdd3910a918da64d2664e8a763f5bfebd88eac063cd93364e095fca50ba&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%221671824951386.jpeg%22&x-id=GetObject",
        name: "Dwaipayan Dey",
        company: "./assets/amazon.png",
        review: "I was not sure what to expect because I had no idea about this topic earlier, but I am quite impressed with the entire process. Facility is professional. Ayush, Our instructor is an expert and is very clear in his method of teaching. Overall I love all the classes.",
        socials: [
            {
                icon: <AiFillLinkedin />,
                link: "https://www.linkedin.com/in/priyanku-saikia-130a441bb/",
            },
        ],
    },
    {
        profilePic:
            "data:image/jpeg;base64,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",
        name: "Priyanku Saikia",
        company: "./assets/amazon.png",
        review: "The course is very good. Our mentor Mr. Ayush makes every concept very easy and solves whatever doubts we get while learning.",
        socials: [
            {
                icon: <AiFillLinkedin style={{ opacity: 0 }} />,
                link: "",
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
