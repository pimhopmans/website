import styled from "styled-components";
import profilePicture from "../assets/profile_picture.jpg";

export const MobileProfilePicture = () => {
  return (
    <Container>
      <Image src={profilePicture} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 200px;
  object-fit: contain;
  border-radius: 50px;
  margin: 0 auto;
`;
