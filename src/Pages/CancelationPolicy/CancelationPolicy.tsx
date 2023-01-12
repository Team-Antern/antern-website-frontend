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
                                    At Antern, we understand that circumstances
                                    may change and you may need to request a
                                    refund for a course you have purchased. Our
                                    refund policy is designed to be fair and
                                    easy to understand.
                                </p>
                                <p>
                                    We offer a 4-day money-back guarantee for
                                    all of our courses. If for any reason you
                                    are not satisfied with your purchase, you
                                    may request a refund within 4 days of the
                                    course date. Simply email us at
                                    team@antern.co with your request and we will
                                    process your refund promptly.
                                </p>
                                <p>
                                    Please note that in order to be eligible for
                                    a refund, you must have completed less than
                                    50% of the course and have not received a
                                    certificate of completion. Additionally, we
                                    do not offer refunds for any course bundles
                                    or special promotions.
                                </p>
                            </SectionContent>
                        </Section>
                        <Section>
                            <SectionHeading>Contact Us</SectionHeading>
                            <SectionContent>
                                <p>
                                    We value your satisfaction and strive to
                                    provide high-quality courses. If you have
                                    any issues or concerns, please do not
                                    hesitate to reach out to our support team at
                                    team@antern.co.
                                </p>
                                <br />
                                Thank you for choosing Antern for your learning
                                needs.
                            </SectionContent>
                        </Section>
                    </Sections>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default CancelationPolicy;
