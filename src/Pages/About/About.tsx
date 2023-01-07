import React from "react";
import { Container, Content } from "./styles";
import AboutHero from "../../Components/About/Hero/Hero";
import OurMission from "../../Components/About/OurMission/OurMission";
import JoinOurCommunity from "../../Components/Courses/JoinOurCommunity/JoinOurCommunity";
import WithAnternYouCan from "../../Components/About/WithAnternYouCan/WithAnternYouCan";
import OurLeadershipTeam from "../../Components/About/OurLeadershipTeam/OurLeadershipTeam";

const AboutUs = () => {
    return (
        <Container>
            <AboutHero />
            <Content>
                <OurMission />
                {/* <WithAnternYouCan /> */}
                {/* <OurLeadershipTeam /> */}
                <JoinOurCommunity />
            </Content>
        </Container>
    );
};

export default AboutUs;
