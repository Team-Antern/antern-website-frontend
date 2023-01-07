import React, { useEffect } from "react";
import { Container, Content, Logo } from "./styles";
import { BarLoader } from "react-spinners";

const Loading = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    return (
        <Container>
            <Content>
                <Logo src="/assets/logo-white.svg" />
                <BarLoader color="#4DE89D" width="20rem" height="0.4rem" />
            </Content>
        </Container>
    );
};

export default Loading;
