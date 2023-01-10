import React from "react";
import {
    Author,
    AuthorProfilePic,
    Container,
    Content,
    Desc,
    Price,
    Tag,
    Title,
    TitlePrice,
} from "./styles";

const PremiumBenefit: React.FC<{
    title: string;
    body: string;
    icon: string;
}> = ({ title, body, icon }) => {
    return (
        <Container>
            <Tag src={icon} />
            <Content>
                <Title>{title}</Title>
                <Desc>{body}</Desc>
                {/* <Author>
          <AuthorProfilePic />
          by ayush singh
        </Author> */}
            </Content>
        </Container>
    );
};

export default PremiumBenefit;
