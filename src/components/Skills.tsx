import styled from "styled-components";
import skills from "../assets/data/skills.json";
import { media, BreakPoint } from "../lib/layout";
import { colors } from "../lib/colors";

export const Skills = () => {
  return (
    <Container id="skills">
      <Title>
        Skills <Divider />
      </Title>
      <Body>
        {skills.map((section) => (
          <SkillSection key={section.label}>
            <Label>{section.label}</Label>
            <Values>{section.items.join(" · ")}</Values>
          </SkillSection>
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
  letter-spacing: 0.5rem;
  color: ${colors.accent};
  margin-bottom: 36px;
`;
const Divider = styled.div`
  flex: 1;
  height: 0;
  border-bottom: 1px solid ${colors.rule};
  margin: 0 20px;
`;
const Body = styled.div`
  line-height: 30px;
  padding: 0 50px 0 10px;

  ${media(BreakPoint.s)} {
    padding: 0 0 0 10px;
  }
`;
const SkillSection = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;

  ${media(BreakPoint.s)} {
    flex-direction: column;
    gap: 0;
  }
`;
const Label = styled.div`
  font-family: "Montserrat-Bold";
  color: ${colors.accent};
  flex: 0 0 130px;

  ${media(BreakPoint.s)} {
    flex: none;
  }
`;
const Values = styled.div`
  flex: 1;
`;
