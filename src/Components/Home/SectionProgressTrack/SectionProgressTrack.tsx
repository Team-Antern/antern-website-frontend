import React, { useContext, useState } from "react";
import {
    Container,
    Gem,
    Section,
    SectionTitle,
    SectionTitles,
    Sections,
    Track,
} from "./styles";
import { SectionProgressTrackContext } from "../../../Context/SectionProgressTrackContext";
import { sections } from "../../../Pages/Home/Home";
import { motion } from "framer-motion";

const SectionProgressTrack = () => {
    const [hovered, setHovered] = useState(false);
    const [activeSection, setActiveSection, sectionsRef] = useContext(
        SectionProgressTrackContext
    );
    const jumpToSection = (index: number) => {
        setActiveSection(index);
        window.scrollTo({
            top:
                sectionsRef[index].getBoundingClientRect().top +
                window.pageYOffset -
                140,
            behavior: "smooth",
        });
    };
    return (
        <Container>
            <Sections
                onMouseOver={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Track />

                {sections.map(({ title }, index) => (
                    <Section>
                        {activeSection === index ? (
                            <Gem
                                as={motion.div}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onClick={() => jumpToSection(index)}
                                isActive={activeSection === index}
                                key={index}
                            />
                        ) : (
                            <Gem
                                onClick={() => jumpToSection(index)}
                                isActive={activeSection === index}
                                key={index}
                            />
                        )}
                        <SectionTitle
                            style={{ opacity: hovered ? 1 : 0 }}
                            onClick={() => jumpToSection(index)}
                            isActive={activeSection === index}
                            key={index}
                        >
                            {title}
                        </SectionTitle>
                    </Section>
                ))}
            </Sections>
            {/* <SectionTitles style={{ opacity: hovered ? 1 : 0 }}>
                {sections.map(({ title }, index) => (
                    <SectionTitle
                        onClick={() => jumpToSection(index)}
                        isActive={activeSection === index}
                        key={index}
                    >
                        {title}
                    </SectionTitle>
                ))}
            </SectionTitles> */}
        </Container>
    );
};

export default SectionProgressTrack;
