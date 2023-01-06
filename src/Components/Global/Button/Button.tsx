import React, { CSSProperties, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";

interface ButtonProps {
    children?: ReactNode;
    to?: string;
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
    transparentBg = false,
    animationProps = {},
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
    return to ? <NavLink to={to}>{buttonElem}</NavLink> : buttonElem;
};

export default Button;
