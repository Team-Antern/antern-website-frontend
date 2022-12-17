import React from "react";
import {
    Container,
    Feature,
    FeatureDesc,
    FeatureHeading,
    FeaturesSeperator,
} from "./styles";

interface FeaturesProps {
    data: {
        heading: string;
        desc: string;
    }[];
}

const Features = ({ data }: FeaturesProps) => {
    return (
        <Container>
            {data.map(({ heading, desc }, index) => (
                <React.Fragment key={index}>
                    <Feature>
                        <FeatureHeading>{heading}</FeatureHeading>
                        <FeatureDesc>{desc}</FeatureDesc>
                    </Feature>
                    {data.length - 1 !== index && <FeaturesSeperator />}
                </React.Fragment>
            ))}
        </Container>
    );
};

export default Features;
