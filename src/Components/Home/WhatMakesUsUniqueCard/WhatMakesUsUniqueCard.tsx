import React from "react";
import {
    CardContent,
    CardDesc,
    CardIcon,
    CardTitle,
    Container,
} from "./styles";
import { motion } from "framer-motion";

interface WhatMakesUsUniqueCardProps {
    icon: string;
    number: number;
    title: string;
    desc: string;
}

const WhatMakesUsUniqueCard = ({
    number,
    icon,
    title,
    desc,
}: WhatMakesUsUniqueCardProps) => {
    return (
        <Container
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
            <CardIcon src={icon} />
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardDesc>{desc}</CardDesc>
            </CardContent>
        </Container>
    );
};

export default WhatMakesUsUniqueCard;
