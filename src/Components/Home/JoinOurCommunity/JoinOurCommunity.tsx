import React, { CSSProperties } from "react";
import Button from "../../Global/Button/Button";
import TransparentBgInput from "../../Global/TransparentBgInput/TransparentBgInput";
import { Wrapper, Container, Desc, Heading, InputGroup } from "./styles";

const JoinOurCommunity = () => {
    return (
        <Wrapper>
            <Container>
                <Heading>Join our community</Heading>
                <Desc>Want to join the Metacrafters Team?</Desc>
                <InputGroup>
                    <TransparentBgInput
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
                            border: "0.1rem solid rgba(240, 240, 240, 0.5)",
                            backdropFilter: "blur(1.5px)",
                            borderRadius: "8px",
                        }}
                        placeholder="Full Name"
                    />
                    <TransparentBgInput
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
                            border: "0.1rem solid rgba(240, 240, 240, 0.5)",
                            backdropFilter: "blur(1.5px)",
                            borderRadius: "8px",
                        }}
                        type="email"
                        placeholder="Email"
                    />
                </InputGroup>
                <Button
                    style={{
                        display: "inline-block",
                    }}
                >
                    Sign up
                </Button>
            </Container>
        </Wrapper>
    );
};

export default JoinOurCommunity;
