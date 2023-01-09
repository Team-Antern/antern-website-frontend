import React from "react";
import {
  Company,
  Container,
  Name,
  ProfilePic,
  ProfilePicWrapper,
  Review,
  Social,
  Socials,
} from "./styles";

interface NotJustTakeOurWordsCardProps {
  profilePic: string;
  name: string;
  company: string;
  review: string;
  socials: {
    icon: JSX.Element;
    link: string;
  }[];
}

const NotJustTakeOurWordsCard = ({
  profilePic,
  name,
  company,
  review,
  socials,
}: NotJustTakeOurWordsCardProps) => {
  return (
    <Container>
      <ProfilePicWrapper>
        <ProfilePic src={profilePic} />
      </ProfilePicWrapper>
      <Name>{name}</Name>
      {/* <Company src={company} /> */}
      <Review>{review}</Review>
      <Socials>
        {socials.map(({ link, icon }, index) => (
          <a href={link} key={index} target="__blank">
            <Social>{icon}</Social>
          </a>
        ))}
      </Socials>
    </Container>
  );
};

export default NotJustTakeOurWordsCard;
