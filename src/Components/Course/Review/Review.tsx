import {
    Container,
    Content,
    Reviewer,
    ReviewerName,
    ReviewerNamePosition,
    ReviewerPosition,
    ReviewerProfilePic,
    ReviewText,
    ReviewTextLineLinearGradient,
} from "./styles";
import { Review as ReviewSchema } from "../../../Context/CourseContext";
import Avatar from "react-avatar";

interface ReviewProps {
    review: ReviewSchema;
    active: boolean;
}

const Review = ({ review, active }: ReviewProps) => {
    return (
        <Container active={active}>
            <Reviewer>
                {review.author.profilePic ? (
                    <ReviewerProfilePic src={review.author.profilePic} />
                ) : (
                    <Avatar
                        size="6.2rem"
                        name={review.author.name}
                        round
                        style={{
                            border: "2px solid rgba(194, 199, 208, 0.2)",
                        }}
                    />
                )}
                <ReviewerNamePosition>
                    <ReviewerPosition>
                        {review.author.position}
                    </ReviewerPosition>
                    <ReviewerName>{review.author.name}</ReviewerName>
                </ReviewerNamePosition>
            </Reviewer>
            <Content>
                <ReviewTextLineLinearGradient />
                <ReviewText>"{review.review}"</ReviewText>
            </Content>
        </Container>
    );
};

export default Review;
