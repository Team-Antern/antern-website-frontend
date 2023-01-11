import React from "react";
import {
    Container,
    CardIcon,
    CardContent,
    CardTitle,
    CardDesc,
} from "./styles";

const PremiumBenefit: React.FC<{
    title: string;
    body: string;
    icon: string;
}> = ({ title, body, icon }) => {
    return (
        <Container>
            <CardIcon>
                <img src={icon} />
            </CardIcon>
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardDesc>{body}</CardDesc>
            </CardContent>
        </Container>
    );
};

export default PremiumBenefit;
