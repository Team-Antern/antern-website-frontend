import React, { createContext, useState } from "react";
import useScrollPercentage from "../Hooks/useScrollPercentage";

export const SectionProgressTrackContext = createContext<null | any>(null);

const SectionProgressTrackContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [activeSection, setActiveSection] = useState(0);
    const [sectionRefs, setSectionRefs] = useState({});
    // const scrollPercentage = useScrollPercentage();
    return (
        <SectionProgressTrackContext.Provider
            value={[
                activeSection,
                setActiveSection,
                sectionRefs,
                setSectionRefs,
            ]}
        >
            {children}
        </SectionProgressTrackContext.Provider>
    );
};

export default SectionProgressTrackContextProvider;
