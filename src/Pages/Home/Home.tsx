import React from "react";
import { Container, Content } from "./styles";
import HomeHero from "../../Components/Home/Hero/Hero";
import Header from "../../Components/Global/Header/Header";
import WhatMakesUsUnique from "../../Components/Home/WhatMakesUsUnique/WhatMakesUsUnique";
import PremiumBenefits from "../../Components/Home/PremiumBenefits/PremiumBenefits";
import NotJustTakeOurWords from "../../Components/Home/NotJustTakeOurWords/NotJustTakeOurWords";
import PlatformComparision from "../../Components/Home/PlatformComparision/PlatformComparision";
import JoinOurCommunity from "../../Components/Home/JoinOurCommunity/JoinOurCommunity";
import FAQ from "../../Components/Home/FAQ/FAQ";
import SectionProgressTrack from "../../Components/Home/SectionProgressTrack/SectionProgressTrack";
import Footer from "../../Components/Global/Footer/Footer";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useContext } from "react";
import SectionProgressTrackContextProvider, {
    SectionProgressTrackContext,
} from "../../Context/SectionProgressTrackContext";
import Section from "../../Components/Home/Section/Section";

export const sections = [
    {
        title: "intro",
        component: <HomeHero />,
    },
    {
        title: "unique thing",
        component: <WhatMakesUsUnique />,
    },
    {
        title: "premium benefits",
        component: <PremiumBenefits />,
    },
    {
        title: "reviews",
        component: <NotJustTakeOurWords />,
    },
    {
        title: "platform comparision",
        component: <PlatformComparision />,
    },
    {
        title: "faq",
        component: <FAQ />,
    },
];

const Home = () => {
    return (
        <Container>
            <Header
                wrapperStyle={{
                    background: "#101c27",
                    position: "sticky",
                    top: "0",
                    zIndex: "2",
                }}
                style={{
                    paddingTop: "3rem",
                    maxWidth: "115rem",
                    margin: "auto",
                }}
            />
            <Content>
                <SectionProgressTrackContextProvider>
                    <SectionProgressTrack />
                    {sections.map(({ component }, index) => (
                        // <ReactVisibilitySensor
                        //     partialVisibility={true}
                        //     minTopValue={0}
                        //     onChange={(isVisible: boolean) => {
                        //         console.log(isVisible, index);
                        //         if (isVisible) setActiveSection(index);
                        //     }}
                        //     key={index}
                        // >
                        //     {component}
                        // </ReactVisibilitySensor>
                        <Section index={index} key={index}>
                            {component}
                        </Section>
                    ))}
                </SectionProgressTrackContextProvider>
                <Footer />
            </Content>
        </Container>
    );
};

export default Home;
