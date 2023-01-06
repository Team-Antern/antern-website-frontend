import React from "react";

interface AnimateOnVisibleProps {
    initial?: string;
    whileInView?: string;
    viewport?: any;
    transition?: any;
    variants?: any;
    as: any;
    children: React.ReactElement;
}

const AnimateOnVisible = ({
    initial = "hidden",
    whileInView = "visible",
    viewport = { amount: 0.2, once: true },
    transition = {
        duration: 1,
    },
    variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    },
    as,
    children,
}: AnimateOnVisibleProps) => {
    return React.cloneElement(children, {
        initial,
        whileInView,
        viewport,
        transition,
        variants,
        as,
    });
};

export default AnimateOnVisible;
