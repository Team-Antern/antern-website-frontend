import React, { CSSProperties, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";
import { motion } from "framer-motion";

interface ButtonProps {
    children?: ReactNode;
    to?: string;
    href?: string;
    onClick?: () => void;
    transparentBg?: boolean;
    style?: CSSProperties;
    hoverStyle?: string;
    animationProps?: any;
}

const Button = ({
    children,
    style = {},
    hoverStyle = ``,
    to,
    href,
    transparentBg = false,
    animationProps = {
        as: motion.div,
        initial: {
            opacity: 0,
            scale: 0.5,
        },
        whileHover: {
            scale: 1.1,
        },
        whileTap: {
            scale: 0.8,
        },
        animate: {
            scale: 1,
            opacity: 1,
        },
        transition: {
            default: {
                duration: 0.2,
                delay: 0,
            },
            scale: {
                delay: 0,
            },
        },
    },
    onClick = () => {},
}: ButtonProps) => {
    const buttonElem = (
        <Container
            transparentBg={transparentBg}
            style={style}
            hoverStyle={hoverStyle}
            onClick={onClick}
            {...animationProps}
        >
            {children}
        </Container>
    );
    if (to) return <NavLink to={to}>{buttonElem}</NavLink>;
    else if (href) return <a href={href}>{buttonElem}</a>;
    else return buttonElem;
};

export default Button;
