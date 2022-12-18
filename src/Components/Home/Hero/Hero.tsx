import React from "react";
import {
    BestQualityCourses,
    Container,
    Content,
    Desc,
    Heading,
    LeftArt,
    NumberOfReviews,
    People,
    Peoples,
    Rating,
    Reviews,
    ReviewsContent,
    ReviewsPageArrow,
    RightArt,
} from "./styles";
import Button from "../../Global/Button/Button";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const peoples = [
    "https://media.licdn.com/dms/image/C4E03AQG5aubzbhBJyQ/profile-displayphoto-shrink_800_800/0/1611205900848?e=1677110400&v=beta&t=9Mkh-9lYSV2EvAASFglpCWIp9aRE4DrDTuH7ccnSXaw",
    "https://media.licdn.com/dms/image/D4D03AQEC7NXN2_XGug/profile-displayphoto-shrink_800_800/0/1665493308669?e=1677110400&v=beta&t=C275PLXYsOKhisp_bAouPsQL6oCqqZqumiDC-EaQzRo",
    "https://media.licdn.com/dms/image/D4D03AQEpT24Chl9tmQ/profile-displayphoto-shrink_800_800/0/1661498124962?e=1677110400&v=beta&t=aGeymncjOoqUz0oXtIrU8G15pT3j-A7ylA6boPVR4j0",
    "https://media.licdn.com/dms/image/C4E03AQG5aubzbhBJyQ/profile-displayphoto-shrink_800_800/0/1611205900848?e=1677110400&v=beta&t=9Mkh-9lYSV2EvAASFglpCWIp9aRE4DrDTuH7ccnSXaw",
    "https://media.licdn.com/dms/image/D4D03AQEC7NXN2_XGug/profile-displayphoto-shrink_800_800/0/1665493308669?e=1677110400&v=beta&t=C275PLXYsOKhisp_bAouPsQL6oCqqZqumiDC-EaQzRo",
];

const HomeHero = () => {
    return (
        <Container>
            <Content>
                <BestQualityCourses>best quality courses</BestQualityCourses>
                <Heading>
                    build your <span>future</span>
                </Heading>
                <Desc>
                    Physical Specially designed Learning Kits for each courses.
                    for example for "Machine Learning Course", we provide a
                    fully package
                </Desc>
                <Button
                    style={{
                        display: "inline-block",
                        padding: "16px 48px",
                    }}
                >
                    Get started
                </Button>
                <Reviews>
                    <Peoples>
                        {peoples.map((people, index) => (
                            <People key={index} index={index} src={people} />
                        ))}
                    </Peoples>
                    <ReviewsContent>
                        <Rating>4.9</Rating>
                        <NumberOfReviews>(627.06 review)</NumberOfReviews>
                        <NavLink to="/about">
                            <ReviewsPageArrow>
                                <BsArrowRight />
                            </ReviewsPageArrow>
                        </NavLink>
                    </ReviewsContent>
                </Reviews>
                <LeftArt />
                <RightArt />
            </Content>
        </Container>
    );
};

export default HomeHero;
