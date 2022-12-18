import React from "react";
import { Container, Content } from "./styles";
import HomeHero from "../../Components/Home/Hero/Hero";
import Header from "../../Components/Global/Header/Header";
import WhatMakesUsUnique from "../../Components/Home/WhatMakesUsUnique/WhatMakesUsUnique";
import PremiumBenefits from "../../Components/Home/PremiumBenefits/PremiumBenefits";
import NotJustTakeOurWords from "../../Components/Home/NotJustTakeOurWords/NotJustTakeOurWords";

const Home = () => {
    return (
        <Container>
            <Content>
                <Header />
                {/* <HomeHero /> */}
                {/* <WhatMakesUsUnique /> */}
                {/* <PremiumBenefits /> */}
                <NotJustTakeOurWords />
            </Content>
        </Container>
    );
};

export default Home;
