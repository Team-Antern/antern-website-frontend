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
    ReviewText,
} from "./styles";
import { Review as ReviewSchema } from "../../../Context/CourseContext";

interface ReviewProps {
    review: ReviewSchema;
}

const Review = ({ review }: ReviewProps) => {
    return (
        <Container>
            <ReviewQuotes />
            <Content>
                <ReviewText>"{review.review}"</ReviewText>
                <ReviewChevron>
                    <BsFillTriangleFill />
                </ReviewChevron>
            </Content>
            <Reviewer>
                <ReviewerProfilePic src={review.author.profilePic} />
                <ReviewerNamePosition>
                    <ReviewerName>{review.author.name}</ReviewerName>
                    <ReviewerPosition>
                        {review.author.position}
                    </ReviewerPosition>
                </ReviewerNamePosition>
            </Reviewer>
        </Container>
    );
};

export default Review;
