import styled from "styled-components";
import experience from "../assets/data/experience.json";
import { BreakPoint, media } from "../lib/layout";

export const Experience = () => {
  return (
    <Container id="experience">
      <Title>
        Experience <Divider />
      </Title>
      <Body>
        {experience.map(
          (exp) =>
            exp.function && (
              <Entry>
                {exp.function === "Developer" ? (
                  <Print>
                    <Date>{exp.date}</Date>
                  </Print>
                ) : (
                  <Date>{exp.date}</Date>
                )}
                <FunctionTitle>{exp.function}</FunctionTitle>
                <Company>{exp.company}</Company>
                <Location>{exp.location}</Location>
                <Description>{exp.text}</Description>
              </Entry>
            )
        )}
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

  @media print {
    width: 550px;
    padding: 0;
    padding-left: 15px;
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

  @media print {
    padding: 0;
    padding-left: 20px;
  }
`;
const Entry = styled.div`
  padding: 20px 0;
`;
const Date = styled.div`
  font-family: "Montserrat-Bold";
`;
const FunctionTitle = styled.div`
  font-family: "Montserrat-Bold";
`;
const Company = styled.div``;
const Location = styled.div``;
const Description = styled.div`
  margin-top: 20px;
`;
const Print = styled.div`
  padding-top: 40px;
`;
