import React, { useContext, useEffect, useRef } from "react";
import { SectionProgressTrackContext } from "../../../Context/SectionProgressTrackContext";

interface SectionProps {
    children: React.ReactElement;
    index: number;
}

const Section = ({ children, index }: SectionProps) => {
    const [, setActiveSection, , setSectionRefs] = useContext(
        SectionProgressTrackContext
    );
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (ref.current) {
            setSectionRefs((prev: any) => ({ ...prev, [index]: ref.current }));
            const intersectionObserver = new IntersectionObserver(
                (e) => e[0].isIntersecting && setActiveSection(index),
                {
                    threshold: 0.5,
                }
            );
            intersectionObserver.observe(ref.current);
        }
    }, [ref.current]);
    return React.cloneElement(children, {
        ref: ref,
    });
};

export default Section;
