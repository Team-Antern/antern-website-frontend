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
      "	https://cdn.discordapp.com/avatars/784777563109195807/741d3b140a15cdbb3719576681efcddc.webp?size=256",
    name: "Tejas",
    company: "./assets/amazon.png",
    review:
      "It's been an incredible journey since I joined CS001-B03 in November. I met so many talented people, especially Ayush Singh, and joined as a Software Engineering Intern at Antern on November 24th. Fast forward to today, 8 Jan 2023, and I am thrilled to have received my first-ever Paycheque from a freelancing gig - all thanks to Ayush's mentorship and guidance.",
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
      "	https://cdn.discordapp.com/avatars/784777563109195807/741d3b140a15cdbb3719576681efcddc.webp?size=256",
    name: "Tarak Ram",
    company: "./assets/amazon.png",
    review:
      "I was skeptical about taking an online course in Machine Learning, but Antern proved to be the perfect choice. With their quality education, affordable prices, and comprehensive resources and guidance, I was able to make the transition from an arts background to a technical field. I'm now able to understand and explain the core concepts to my classmates, and I even got a job at Antern! I'm so grateful for the opportunity to learn with Antern, and I'm now able to share my knowledge with others through my own YouTube course. ",
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
      "	https://cdn.discordapp.com/avatars/784777563109195807/741d3b140a15cdbb3719576681efcddc.webp?size=256",
    name: "Harshini V Bhat",
    company: "./assets/amazon.png",
    review:
      "As of now I loved every bit of the course be it the in-depth lectures, assignments and the support rendered by the team looking forward for the practical implementation and more such in-depth lectures. Really very greatful for your efforts",
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
      "	https://cdn.discordapp.com/avatars/784777563109195807/741d3b140a15cdbb3719576681efcddc.webp?size=256",
    name: "Katuri Bhanu",
    company: "./assets/amazon.png",
    review:
      "I would say heartfully thanks to Ayush Singh, for providing top-notch content in the Machine Learning course that no one can provide. One more quality I liked in this course was that we can resolve our doubts immediately through the discord server. I am looking forward to learning a lot more in this course.",
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
      "	https://cdn.discordapp.com/avatars/784777563109195807/741d3b140a15cdbb3719576681efcddc.webp?size=256",
    name: "Katuri Vinay Chowdary ",
    company: "./assets/amazon.png",
    review:
      "I was amazed by the depth of knowledge I gained from Antern's regression analysis coursework and assignments. I was able to understand the concept on a much deeper level, and the handwritten notes and intuitive videos made it easy to learn and revise. I'm so thankful for the quality and quantity of content Antern provides, and I'm grateful for the opportunity to learn with them!",
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
      "	https://cdn.discordapp.com/avatars/784777563109195807/741d3b140a15cdbb3719576681efcddc.webp?size=256",
    name: "Soumyadarshan Dash ",
    company: "./assets/amazon.png",
    review:
      "I highly recommend Antern's Machine Learning course to anyone interested in learning about this topic. The material is presented in a clear and concise manner, making it easy to understand even for those who are new to the subject. The lectures are well-structured and the accompanying examples and exercises help to reinforce the concepts being taught. The instructor's ability to explain complex statistical concepts in an easy-to-understand way was especially impressive. I feel that I have gained a strong foundation in Statistics and Machine Learning and am confident in my ability to apply these techniques in my future studies and work. Antern's Machine Learning course is a great way to improve your understanding of this subject - I highly recommend it!",
    socials: [
      {
        icon: <AiFillTwitterCircle />,
        link: "https://twitter.com/",
      },
    ],
  },
  {
    profilePic:
      "	https://cdn.discordapp.com/avatars/784777563109195807/741d3b140a15cdbb3719576681efcddc.webp?size=256",
    name: "Premsiva Muddam ",
    company: "./assets/amazon.png",
    review:
      "The course is Amazing and I am learning a lot from this course. The lectures by Ayush are interesting and not boring. You make us explore the topic more with the assignments. Meeting great people through guest lectures boost our confidence. Last but not least those chill sessions are memorable, solving doubts regarding the course, relations, and career. Thank you Ayush :)",
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
      "	https://cdn.discordapp.com/avatars/784777563109195807/741d3b140a15cdbb3719576681efcddc.webp?size=256",
    name: "Vishwas Gowda",
    company: "./assets/amazon.png",
    review:
      "An extremely valuable course not just for the course content but also because of the guest lecturers, assignments, community, networking and freelancing opportunities, unlike any other course. Very well done Ayush and team.",
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
      "	https://cdn.discordapp.com/avatars/784777563109195807/741d3b140a15cdbb3719576681efcddc.webp?size=256",
    name: "Sriram Paranthaman",
    company: "./assets/amazon.png",
    review:
      "This course exceeded my expectations. Ayush is knowledgeable and approachable, and the course material was well-organized and easy to follow. Ayush and his team provided a strong foundation in the concepts and algorithms of machine learning, but also made sure to include plenty of hands-on exercises and projects to apply what we were learning. This helped me to better understand and retain the material.",
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
      "	https://cdn.discordapp.com/avatars/784777563109195807/741d3b140a15cdbb3719576681efcddc.webp?size=256",
    name: "Aniruddha Singh Tomar",
    company: "./assets/amazon.png",
    review:
      "The way that Ayush teaches the concept from basic to advanced is very nice . And i love the discord server where u can ask doubt , and within minutes the doubt is resolved by Ayush or by another person in discord.",
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
      "	https://cdn.discordapp.com/avatars/784777563109195807/741d3b140a15cdbb3719576681efcddc.webp?size=256",
    name: "Viswa Kiran Andraju",
    company: "./assets/amazon.png",
    review:
      'The course offers great level of explanation along with crisp examples, real-time applications when required which increases the level of understanding of the concept thus cementing it in our heads. Ayush, our instructor is great example showing us "When I can do it, Why not you?" which gives us inspiration to work on.',
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
      "	https://cdn.discordapp.com/avatars/784777563109195807/741d3b140a15cdbb3719576681efcddc.webp?size=256",
    name: "Ganala Mohan Rao",
    company: "./assets/amazon.png",
    review:
      "The course is well structured and anyone having no background in the programming can easily understand.Course content is in depth and good. Course instructor(Ayush Singh) is too good and very helpful.",
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
      "	https://cdn.discordapp.com/avatars/784777563109195807/741d3b140a15cdbb3719576681efcddc.webp?size=256",
    name: "Dwaipayan Dey",
    company: "./assets/amazon.png",
    review:
      "I was not sure what to expect because I had no idea about this topic earlier, but I am quite impressed with the entire process. Facility is professional. Ayush, Our instructor is an expert and is very clear in his method of teaching. Overall I love all the classes.",
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
      "	https://cdn.discordapp.com/avatars/784777563109195807/741d3b140a15cdbb3719576681efcddc.webp?size=256",
    name: "Priyanku Saikia",
    company: "./assets/amazon.png",
    review:
      "The course is very good. Our mentor Mr. Ayush makes every concept very easy and solves whatever doubts we get while learning.",
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
      "	https://cdn.discordapp.com/avatars/784777563109195807/741d3b140a15cdbb3719576681efcddc.webp?size=256",
    name: "Premsiva Muddam ",
    company: "./assets/amazon.png",
    review:
      "The course is Amazing and I am learning a lot from this course. The lectures by Ayush are interesting and not boring. You make us explore the topic more with the assignments. Meeting great people through guest lectures boost our confidence. Last but not least those chill sessions are memorable, solving doubts regarding the course, relations, and career. Thank you Ayush :)",
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
            {notJustTakeOurWordsCards.map((notJustTakeOurWordsCard, index) => (
              <SwiperSlide key={index}>
                <NotJustTakeOurWordsCard {...notJustTakeOurWordsCard} />
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
      </Container>
    </AnimateOnVisible>
  );
});

export default React.memo(NotJustTakeOurWords);
