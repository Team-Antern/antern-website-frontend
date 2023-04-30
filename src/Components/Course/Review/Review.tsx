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

interface ReviewProps {
    review: ReviewSchema;
    active: boolean;
}

const Review = ({ review, active }: ReviewProps) => {
    return (
        <Container active={active}>
            <Reviewer>
                <ReviewerProfilePic src={review.author.profilePic} />
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
