import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

const TransparentBgInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return <Container {...props} />;
};

export default TransparentBgInput;
