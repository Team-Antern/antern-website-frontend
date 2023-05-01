import { useContext } from "react";
import {
    Container,
    Content,
    InstructorAbout,
    InstructorDetails,
    InstructorName,
    InstructorNameSocials,
    InstructorProfilePic,
    InstructorSocial,
    InstructorSocials,
} from "./styles";
import { CourseContext } from "../../../Context/CourseContext";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Instructor = () => {
    const courseDetails = useContext(CourseContext);
    if (!courseDetails) return null;
    return (
        <Container>
            <Content>
                <InstructorDetails>
                    <InstructorProfilePic
                        src={courseDetails.instructor.profilePic}
                    />
                    <InstructorNameSocials>
                        <InstructorName>
                            {courseDetails.instructor.name}
                        </InstructorName>
                        <InstructorSocials>
                            <InstructorSocial>
                                <BsTwitter />
                            </InstructorSocial>
                            <InstructorSocial>
                                <BsLinkedin />
                            </InstructorSocial>
                            <InstructorSocial>
                                <BsInstagram />
                            </InstructorSocial>
                        </InstructorSocials>
                    </InstructorNameSocials>
                </InstructorDetails>
                <InstructorAbout>
                    {courseDetails.instructor.about}
                </InstructorAbout>
            </Content>
        </Container>
    );
};

export default Instructor;
