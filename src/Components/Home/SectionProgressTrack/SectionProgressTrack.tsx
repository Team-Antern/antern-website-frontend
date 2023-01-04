import React, { useState } from "react";
import {
    Container,
    Gem,
    Section,
    SectionTitle,
    SectionTitles,
    Sections,
    Track,
} from "./styles";

const SectionProgressTrack = () => {
    const [hovered, setHovered] = useState(false);
    const [sections, setSections] = useState([
        "home",
        "about",
        "about",
        "about",
        "about",
    ]);
    const [activeSection, setActiveSection] = useState(0);
    return (
        <Container
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Sections>
                <Track />
                {sections.map((section, index) => (
                    <Gem
                        onClick={() => setActiveSection(index)}
                        isActive={activeSection === index}
                        key={index}
                    />
                ))}
            </Sections>
            <SectionTitles style={{ opacity: hovered ? 1 : 0 }}>
                {sections.map((section, index) => (
                    <SectionTitle
                        onClick={() => setActiveSection(index)}
                        isActive={activeSection === index}
                        key={index}
                    >
                        {section}
                    </SectionTitle>
                ))}
            </SectionTitles>
        </Container>
    );
};

export default SectionProgressTrack;
