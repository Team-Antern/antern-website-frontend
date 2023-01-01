import React from "react";
import { Container, Content, Tab } from "./styles";

interface TabsProps {
    data: {
        name: string;
        component: JSX.Element;
    }[];
    selectedTab: number;
    setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

const Tabs = ({ selectedTab, setSelectedTab, data }: TabsProps) => {
    return (
        <Container>
            <Content>
                {data.map(({ name }, index) => (
                    <Tab
                        key={index}
                        isActive={selectedTab === index}
                        onClick={() => setSelectedTab(index)}
                    >
                        {name}
                    </Tab>
                ))}
            </Content>
        </Container>
    );
};

export default Tabs;
