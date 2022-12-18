import React from "react";
import {
    CardContent,
    CardDesc,
    CardNumber,
    CardTitle,
    Container,
} from "./styles";

interface WhatMakesUsUniqueCardProps {
    bg: string;
    number: number;
    title: string;
    desc: string;
}

const WhatMakesUsUniqueCard = ({
    number,
    bg,
    title,
    desc,
}: WhatMakesUsUniqueCardProps) => {
    return (
        <Container bg={bg}>
            <CardNumber>{number}</CardNumber>
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardDesc>{desc}</CardDesc>
            </CardContent>
        </Container>
    );
};

export default WhatMakesUsUniqueCard;
