import React, { useState } from "react";
import { Container, Content, Heading } from "./styles";
import Tabs from "../../Global/Tabs/Tabs";
import ModuleContent from "../ModuleContent/ModuleContent";
import FreelancingGigs from "../FreelancingGigs/FreelancingGigs";
import LectureNotes from "../LectureNotes/LectureNotes";

const tabs = [
    {
        name: "Module Content",
        component: <ModuleContent />,
    },
    {
        name: "Lecture Notes",
        component: <LectureNotes />,
    },
    {
        name: "Freelancing Gigs",
        component: <FreelancingGigs />,
    },
];

const WhatYouGetByEnrolling = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <Container>
            <Heading>what your get by enrolling?</Heading>
            <Tabs
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                data={tabs}
            />
            <Content>{tabs[selectedTab].component}</Content>
        </Container>
    );
};

export default WhatYouGetByEnrolling;
