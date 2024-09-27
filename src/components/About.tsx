import styled from "styled-components";
import { BreakPoint, media } from "../lib/layout";

export const About = () => {
  return (
    <Container id="about">
      <Title>
        About <Divider />
      </Title>
      <Body>
        <Hello>
          Hi! My name's Pim, and I'm a Software Engineer that can do both
          frontend, backend and a pinch of dev ops.
        </Hello>

        <Hello>
          I prefer web and app development, but I am open to learn anything.
          Next on my list is implementing AI and Machine Learning models.
        </Hello>

        <Hello>
          I'm interested in jobs that require a detailed perspective, critical
          thinking and are helpful to society.
        </Hello>

        <Hello>
          I'm a fast learner of new skills, so don't let any missing skills on
          this page stop you from contacting me. If you think we could be a
          match, hit me up!
        </Hello>

        <Motto>If you put your mind to it, anything is possible.</Motto>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 480px;
  padding: 150px 0;
  margin: 0 auto;

  ${media(BreakPoint.s)} {
    width: 300px;
    padding: 50px 0;
  }
  @media print {
    display: none;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  font-family: "CormorantGaramond-Regular";
  font-size: 25px;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  margin-bottom: 24px;
`;
const Divider = styled.div`
  flex: 1;
  height: 0;
  border-bottom: 1px solid black;
  margin: 0 20px;
`;
const Body = styled.div`
  padding: 0 50px 0 10px;
  line-height: 30px;
`;
const Hello = styled.div`
  margin-bottom: 30px;
`;
const Motto = styled.div`
  font-family: "CormorantGaramond-Italic";
  font-size: 20px;
  margin-top: 20px;
`;
