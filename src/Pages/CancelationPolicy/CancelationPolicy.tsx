import React from "react";
import {
    Container,
    Content,
    Desc,
    Heading,
    Opening,
    Section,
    SectionContent,
    SectionHeading,
    Sections,
    UnorderdList,
    Wrapper,
} from "./styles";
import Header from "../../Components/Global/Header/Header";

const CancelationPolicy = () => {
    return (
        <Wrapper>
            <Header
                wrapperStyle={{
                    background: "#101c27",
                    position: "sticky",
                    top: "0",
                    zIndex: "2",
                }}
                style={{
                    paddingTop: "3rem",
                    maxWidth: "115rem",
                    margin: "auto",
                }}
            />
            <Container>
                <Heading>
                    Cancelation <span>Policy</span>
                </Heading>
                <Desc>Cancelation Policy For Antern</Desc>
                <Content>
                    <Opening>
                        <p>
                            At Antern, we provide top-quality education services
                            to our students and we are confident that you will
                            be satisfied with your course. However, we
                            understand that plans and circumstances can change,
                            so we have already provided free sample lectures out
                            there and learning materials to see.
                        </p>
                    </Opening>
                    <Sections>
                        <Section>
                            <SectionHeading>Refund Policy</SectionHeading>
                            <SectionContent>
                                <p>
                                    We do not offer refunds for any of our
                                    courses under any circumstances, including
                                    but not limited to, dissatisfaction with the
                                    course, withdrawal from the course, or
                                    absence from the course. All sales are final
                                    and any fees paid are non-refundable.
                                </p>
                                <p>
                                    Please note that by enrolling in one of our
                                    courses, you are agreeing to this no-refund
                                    policy.
                                </p>
                            </SectionContent>
                        </Section>
                        <Section>
                            <SectionHeading>Contact Us</SectionHeading>
                            <SectionContent>
                                <p>
                                    If you have any questions or concerns about
                                    our cancellation and refund policy, please
                                    contact us at team@antern.co
                                </p>
                            </SectionContent>
                        </Section>
                    </Sections>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default CancelationPolicy;
