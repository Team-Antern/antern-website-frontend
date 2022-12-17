import React from "react";
import Button from "../../Global/Button/Button";
import TransparentBgInput from "../../Global/TransparentBgInput/TransparentBgInput";
import { Container, Desc, Heading, InputGroup } from "./styles";

const JoinOurCommunity = () => {
    return (
        <Container>
            <Heading>Join our community</Heading>
            <Desc>Want to join the Metacrafters Team?</Desc>
            <InputGroup>
                <TransparentBgInput placeholder="Full Name" />
                <TransparentBgInput type="email" placeholder="Email" />
            </InputGroup>
            <Button
                style={{
                    display: "inline-block",
                }}
            >
                Sign up
            </Button>
        </Container>
    );
};

export default JoinOurCommunity;
