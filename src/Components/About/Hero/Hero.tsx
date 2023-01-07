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
import { Variants, motion } from "framer-motion";

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
                    <Heading
                        as={motion.div}
                        initial={{
                            opacity: 0,
                            y: -10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                    >
                        about us
                    </Heading>
                    <Desc
                        as={motion.div}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 2,
                            delay: 0.5,
                        }}
                    >
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
