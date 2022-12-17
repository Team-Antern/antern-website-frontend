import BreadCrumbs from "../../Global/BreadCrumbs/BreadCrumbs";
import Header from "../../Global/Header/Header";
import {
    Container,
    Content,
    Heading,
    HeroMain,
    Chat,
    Desc,
    GrowSkill,
    Tips,
} from "./styles";

const AboutHero = () => {
    return (
        <Container>
            <Content>
                <Header />
                <HeroMain>
                    <BreadCrumbs
                        path={[
                            {
                                to: "/",
                                text: "home",
                            },
                            {
                                to: "/about-us",
                                text: "about us",
                            },
                        ]}
                    />
                    <Heading>about us</Heading>
                    <Desc>
                        Antern is where lifelong learners come to learn the
                        skills they need, to land the jobs they want, to build
                        the lives they deserve.
                    </Desc>
                </HeroMain>
                <Chat />
                <Tips />
                <GrowSkill />
            </Content>
        </Container>
    );
};

export default AboutHero;
