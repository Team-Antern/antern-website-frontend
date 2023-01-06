import React from "react";
import {
    CardContent,
    CardDesc,
    CardNumber,
    CardTitle,
    Container,
} from "./styles";
import { motion } from "framer-motion";

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
        <Container
            bg={bg}
            as={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={{
                offscreen: {
                    y: 300,
                },
                onscreen: {
                    y: 50,
                    transition: {
                        type: "ease-in",
                    },
                },
            }}
        >
            <CardNumber>{number}</CardNumber>
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardDesc>{desc}</CardDesc>
            </CardContent>
        </Container>
    );
};

export default WhatMakesUsUniqueCard;
