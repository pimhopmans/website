import styled from "styled-components";
import { BreakPoint, media } from "../lib/layout";
import { colors } from "../lib/colors";

export const About = () => {
  return (
    <Container id="about">
      <Title>
        About <Divider />
      </Title>
      <Body>
        <Intro>
          Hi, I'm Pim. I'm a full-stack engineer with a strong frontend
          orientation and seven years of building products in JavaScript,
          TypeScript and React (Native). Since 2022 I've led an in-house
          development team, owning architecture and code quality while staying
          hands-on across the stack, from React and React Native frontends to
          Node.js APIs and the servers they run on. I also have a real affinity
          with music and live events: alongside development I lead teams at
          festivals such as Lowlands and Down The Rabbit Hole.
        </Intro>
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
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  font-family: "CormorantGaramond-Regular";
  font-size: 25px;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  color: ${colors.accent};
  margin-bottom: 24px;
`;
const Divider = styled.div`
  flex: 1;
  height: 0;
  border-bottom: 1px solid ${colors.rule};
  margin: 0 20px;
`;
const Body = styled.div`
  padding: 0 50px 0 10px;
  line-height: 30px;

  ${media(BreakPoint.s)} {
    padding: 0 0 0 10px;
  }
`;
const Intro = styled.div``;
