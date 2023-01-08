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

const SectionProgressTrack = () => {
    const [hovered, setHovered] = useState(false);
    const [activeSection, setActiveSection, , scrollPercentage] = useContext(
        SectionProgressTrackContext
    );
    return (
        <Container>
            <Sections
                onMouseOver={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Track scrollPercentage={scrollPercentage} />
                {sections.map((section, index) => (
                    <Gem
                        onClick={() => setActiveSection(index)}
                        isActive={activeSection === index}
                        key={index}
                    />
                ))}
            </Sections>
            <SectionTitles style={{ opacity: hovered ? 1 : 0 }}>
                {sections.map(({ title }, index) => (
                    <SectionTitle
                        onClick={() => setActiveSection(index)}
                        isActive={activeSection === index}
                        key={index}
                    >
                        {title}
                    </SectionTitle>
                ))}
            </SectionTitles>
        </Container>
    );
};

export default SectionProgressTrack;
