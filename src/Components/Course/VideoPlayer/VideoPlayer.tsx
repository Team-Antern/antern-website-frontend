import React, { useContext, useEffect } from "react";
import { CloseButton, Container, Content } from "./styles";
import { IoMdClose } from "react-icons/io";
import { CourseContext } from "../../../Context/CourseContext";

interface VideoPlayerProps {
    closeVideoPlayer: () => void;
}

const VideoPlayer = ({ closeVideoPlayer }: VideoPlayerProps) => {
    const courseDetails = useContext(CourseContext);
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);
    if (!courseDetails) return null;
    return (
        <Container>
            <CloseButton onClick={closeVideoPlayer}>
                <IoMdClose />
            </CloseButton>
            <Content
                src={`https://www.youtube.com/embed/${courseDetails.courseVideo}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </Container>
    );
};

export default VideoPlayer;
