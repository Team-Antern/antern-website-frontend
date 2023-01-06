import React, { createContext, useState } from "react";
import useScrollPercentage from "../Hooks/useScrollPercentage";

export const SectionProgressTrackContext = createContext<null | any>(null);

const SectionProgressTrackContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [activeSection, setActiveSection] = useState(0);
    const [scrollRef, scrollPercentage] = useScrollPercentage();
    console.log(activeSection);
    return (
        <SectionProgressTrackContext.Provider
            value={[
                activeSection,
                setActiveSection,
                scrollRef,
                scrollPercentage,
            ]}
        >
            {children}
        </SectionProgressTrackContext.Provider>
    );
};

export default SectionProgressTrackContextProvider;
