import React, { CSSProperties, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";

interface ButtonProps {
    children?: ReactNode;
    to?: string;
    onClick?: () => void;
    transparentBg?: boolean;
    style?: CSSProperties;
}

const Button = ({
    children,
    style = {},
    to,
    transparentBg = false,
    onClick = () => {},
}: ButtonProps) => {
    const buttonElem = (
        <Container
            transparentBg={transparentBg}
            style={style}
            onClick={onClick}
        >
            {children}
        </Container>
    );
    return to ? <NavLink to={to}>{buttonElem}</NavLink> : buttonElem;
};

export default Button;
