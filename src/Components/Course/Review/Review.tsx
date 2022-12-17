import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import {
    Container,
    Content,
    ReviewChevron,
    Reviewer,
    ReviewerName,
    ReviewerNamePosition,
    ReviewerPosition,
    ReviewerProfilePic,
    ReviewQuotes,
} from "./styles";

const Review = () => {
    return (
        <Container>
            <ReviewQuotes />
            <Content>
                "I found Priyanshu's course to be the foundation for my
                knowledge of Unity's platform and C# scripting as it was the
                first one I followed."
                <ReviewChevron>
                    <BsFillTriangleFill />
                </ReviewChevron>
            </Content>
            <Reviewer>
                <ReviewerProfilePic src="https://bit.ly/3iFDcYj" />
                <ReviewerNamePosition>
                    <ReviewerName>shreya sethi</ReviewerName>
                    <ReviewerPosition>student</ReviewerPosition>
                </ReviewerNamePosition>
            </Reviewer>
        </Container>
    );
};

export default Review;
