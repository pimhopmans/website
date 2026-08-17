import styled from "styled-components";
import experienceData from "../assets/data/experience.json";
import { BreakPoint, media } from "../lib/layout";
import { colors } from "../lib/colors";

interface Bullet {
  lead?: string;
  text: string;
}

interface Role {
  function: string;
  date: string;
  bullets: Bullet[];
}

interface Company {
  company: string;
  location: string;
  roles: Role[];
}

const experience: Company[] = experienceData;

export const Experience = () => {
  return (
    <Container id="experience">
      <Title>
        Experience <Divider />
      </Title>
      <Body>
        {experience.map((company) => (
          <CompanyEntry key={company.company}>
            <CompanyName>
              {company.company} <Separator>·</Separator>
              <CompanyLocation>{company.location}</CompanyLocation>
            </CompanyName>

            <Roles>
              {company.roles.map((role) => (
                <Role key={`${role.function} ${role.date}`}>
                  <RoleTitle>
                    {role.function} <Separator>·</Separator>
                    <RoleDate>{role.date}</RoleDate>
                  </RoleTitle>
                  <Bullets>
                    {role.bullets.map((bullet) => (
                      <BulletItem key={bullet.text}>
                        {bullet.lead && <BulletLead>{bullet.lead}</BulletLead>}
                        {bullet.text}
                      </BulletItem>
                    ))}
                  </Bullets>
                </Role>
              ))}
            </Roles>
          </CompanyEntry>
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
const CompanyEntry = styled.div`
  padding: 20px 0;
`;
const CompanyName = styled.div`
  font-family: "Montserrat-Bold";
`;
const Separator = styled.span`
  color: ${colors.muted};
  margin: 0 2px;
`;
const CompanyLocation = styled.span`
  font-family: "Montserrat-Italic";
  color: ${colors.muted};
`;
const Roles = styled.div`
  border-left: 1px solid ${colors.accentLight};
  margin: 12px 0 0 4px;
  padding-left: 16px;
`;
const Role = styled.div`
  & + & {
    margin-top: 24px;
  }
`;
const RoleTitle = styled.div`
  font-family: "Montserrat-Bold";
`;
const RoleDate = styled.span`
  font-family: "Montserrat-Regular";
`;
const Bullets = styled.ul`
  list-style: none;
  margin: 4px 0 0;
  padding: 0;
`;
const BulletItem = styled.li`
  position: relative;
  padding-left: 18px;
  margin-top: 8px;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: ${colors.accent};
  }
`;
const BulletLead = styled.span`
  font-family: "Montserrat-Bold";

  &::after {
    content: " ";
  }
`;
