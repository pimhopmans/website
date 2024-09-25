import styled from "styled-components";
import profilePicture from "../assets/profile_picture.jpg";
import { BreakPoint, media } from "../lib/layout";

export const ProfilePicture = () => {
  return (
    <Container>
      <Image src={profilePicture} />
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding-left: 200px;

  ${media(BreakPoint.s)} {
    padding: 50px;
    margin: 0 auto;
  }
`;
const Image = styled.img`
  position: fixed;
  width: 350px;
  top: 20vh;
  right: 10vw;
  object-fit: contain;
  border-radius: 10px;

  ${media(BreakPoint.s)} {
    position: static;
    top: 0;
    right: 0;
    width: 200px;
    margin: 0 auto;
  }
`;
