import { BsArrowDown } from "react-icons/bs";
import Button from "../../Global/Button/Button";
import {
    Heading,
    Container,
    Content,
    HeadingUnderline,
    Card,
    CardImage,
} from "./styles";
import { useContext } from "react";
import { CourseContext } from "../../../Context/CourseContext";

const YouGotCoveredEverything = () => {
    const courseDetails = useContext(CourseContext);
    if (!courseDetails) return null;
    return (
        <Container>
            <Heading>
                You got covered everything
                <HeadingUnderline
                    src="/assets/heading-underline.svg"
                    draggable={false}
                />
            </Heading>
            <Content>
                <Card>
                    <CardImage
                        src={courseDetails.lectureNotes.image}
                        draggable={false}
                    />
                    <Button
                        style={{
                            textTransform: "uppercase",
                            fontWeight: 700,
                            borderRadius: "5rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "0.8rem",
                        }}
                        animationProps={{}}
                        href={courseDetails.lectureNotes.pdfLink}
                    >
                        download
                        <BsArrowDown />
                    </Button>
                </Card>
                <Card>
                    <CardImage
                        src={courseDetails.courseSyllabus.image}
                        draggable={false}
                    />
                    <Button
                        style={{
                            textTransform: "uppercase",
                            fontWeight: 700,
                            borderRadius: "5rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "0.8rem",
                        }}
                        animationProps={{}}
                        href={courseDetails.courseSyllabus.pdfLink}
                    >
                        download
                        <BsArrowDown />
                    </Button>
                </Card>
            </Content>
        </Container>
    );
};

export default YouGotCoveredEverything;
