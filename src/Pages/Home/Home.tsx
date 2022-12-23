import React from "react";
import { Container, Content } from "./styles";
import HomeHero from "../../Components/Home/Hero/Hero";
import Header from "../../Components/Global/Header/Header";
import WhatMakesUsUnique from "../../Components/Home/WhatMakesUsUnique/WhatMakesUsUnique";
import PremiumBenefits from "../../Components/Home/PremiumBenefits/PremiumBenefits";
import NotJustTakeOurWords from "../../Components/Home/NotJustTakeOurWords/NotJustTakeOurWords";
import PlatformComparision from "../../Components/Home/PlatformComparision/PlatformComparision";
import JoinOurCommunity from "../../Components/Home/JoinOurCommunity/JoinOurCommunity";

const Home = () => {
    return (
        <Container>
            <Content>
                <Header />
                <HomeHero />
                <WhatMakesUsUnique />
                <PremiumBenefits />
                <NotJustTakeOurWords />
                <PlatformComparision />
                <JoinOurCommunity />
            </Content>
        </Container>
    );
};

export default Home;
