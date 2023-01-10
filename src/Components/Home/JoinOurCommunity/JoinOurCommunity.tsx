import React, { CSSProperties } from "react";
import Button from "../../Global/Button/Button";
import TransparentBgInput from "../../Global/TransparentBgInput/TransparentBgInput";
import { Wrapper, Desc, Heading, InputGroup } from "./styles";

const JoinOurCommunity = () => {
    return (
        <Wrapper>
            <Heading>Join our community</Heading>
            <Desc>Want to join the Antern Team?</Desc>
            <InputGroup>
                <TransparentBgInput
                    style={{
                        border: "0.1rem solid rgba(240, 240, 240, 0.5)",
                        backdropFilter: "blur(1.5px)",
                        borderRadius: "8px",
                    }}
                    placeholder="Full Name"
                />
                <TransparentBgInput
                    style={{
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
        </Wrapper>
    );
};

export default JoinOurCommunity;
