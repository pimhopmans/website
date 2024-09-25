import styled from "styled-components";
import skills from "../assets/data/skills.json";
import { media, BreakPoint } from "../lib/layout";

export const Skills = () => {
  return (
    <Container id="skills">
      <Title>
        Skills <Divider />
      </Title>
      <Body>
        <SkillSection>
          <Label>Programming languages</Label>

          <SkillContainer>
            {skills.programming_languages.map((skill) => (
              <Skill>{skill}</Skill>
            ))}
          </SkillContainer>
        </SkillSection>

        <SkillSection>
          <Label>Frameworks</Label>

          <SkillContainer>
            {skills.frameworks.map((skill) => (
              <Skill>{skill}</Skill>
            ))}
          </SkillContainer>
        </SkillSection>

        <SkillSection>
          <Label>Libraries</Label>

          <SkillContainer>
            {skills.libraries.map((skill) => (
              <Skill>{skill}</Skill>
            ))}
          </SkillContainer>
        </SkillSection>

        <SkillSection>
          <Label>Databases</Label>

          <SkillContainer>
            {skills.databases.map((skill) => (
              <Skill>{skill}</Skill>
            ))}
          </SkillContainer>
        </SkillSection>

        <SkillSection>
          <Label>Services</Label>

          <SkillContainer>
            {skills.services.map((skill) => (
              <Skill>{skill}</Skill>
            ))}
          </SkillContainer>
        </SkillSection>
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
  margin-bottom: 36px;
`;
const Divider = styled.div`
  flex: 1;
  height: 0;
  border-bottom: 1px solid black;
  margin: 0 20px;
`;
const Body = styled.div`
  line-height: 30px;
  padding: 0 50px 0 10px;
`;
const SkillSection = styled.div`
  margin-top: 20px;
`;
const Label = styled.div`
  font-family: "Montserrat-Bold";
  margin-bottom: 20px;
`;
const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Skill = styled.div`
  line-height: 20px;
  padding: 5px 10px;
`;
