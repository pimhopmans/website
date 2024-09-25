import styled from "styled-components";
import education from "../assets/data/education.json";
import { BreakPoint, media } from "../lib/layout";

export const Education = () => {
  return (
    <Container id="education">
      <Title>
        Education <Divider />
      </Title>
      <Body>
        {education.map((edu) => (
          <Entry>
            <Date>{edu.date}</Date>
            <Institute>{edu.institution}</Institute>
            <Programme>{edu.programme}</Programme>
            <Location>{edu.location}</Location>
          </Entry>
        ))}
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 480px;
  padding-bottom: 150px;
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
  letter-spacing: 1rem;
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
const Entry = styled.div`
  padding: 20px 0;
`;
const Date = styled.div`
  font-family: "Montserrat-Bold";
`;
const Institute = styled.div`
  font-family: "Montserrat-Bold";
`;
const Programme = styled.div``;
const Location = styled.div``;
