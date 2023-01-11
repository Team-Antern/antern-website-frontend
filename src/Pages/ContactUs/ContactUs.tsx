import React from "react";
import Header from "../../Components/Global/Header/Header";
import { Container, Content } from "./styles";
import { Widget } from "@typeform/embed-react";

const ContactUs = () => {
    return (
        <Container>
            <Header
                wrapperStyle={{
                    background: "#101c27",
                    position: "sticky",
                    top: "0",
                    zIndex: "2",
                }}
                style={{
                    paddingTop: "3rem",
                    maxWidth: "115rem",
                    margin: "auto",
                }}
            />
            <Content>
                <Widget
                    id="AmLZlyiP"
                    style={{ width: "100%", height: "100%" }}
                    className="my-form"
                />
            </Content>
        </Container>
    );
};

export default ContactUs;
