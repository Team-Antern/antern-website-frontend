import React from "react";
import {
    Author,
    AuthorProfilePic,
    Container,
    Content,
    Desc,
    Image,
    Price,
    Tag,
    Title,
    TitlePrice,
} from "./styles";

const PremiumBenefit = () => {
    return (
        <Container>
            <Tag>popular</Tag>
            <Image />
            <Content>
                <TitlePrice>
                    <Title>chapter wise assignments and projects</Title>
                    <Price>$100 USD</Price>
                </TitlePrice>
                <Desc>
                    We have AI Powered Teaching Assistants which help students
                    to write the code, explain the code, and help in debug any
                    of their code.
                </Desc>
                <Author>
                    <AuthorProfilePic />
                    by ayush singh
                </Author>
            </Content>
        </Container>
    );
};

export default PremiumBenefit;
