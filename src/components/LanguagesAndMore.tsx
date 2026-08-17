import styled from "styled-components";
import languages from "../assets/data/languages.json";
import { BreakPoint, media } from "../lib/layout";
import { colors } from "../lib/colors";

export const LanguagesAndMore = () => {
  return (
    <Container id="languages">
      <Title>
        Languages &amp; more <Divider />
      </Title>
      <Body>
        <Section>
          <Label>Languages</Label>
          <Value>{languages.languages.join(" · ")}</Value>
        </Section>

        <Section>
          <Label>Interests</Label>
          <Value>{languages.interests}</Value>
        </Section>
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
const Section = styled.div`
  margin-top: 20px;
`;
const Label = styled.div`
  font-family: "Montserrat-Bold";
  color: ${colors.accent};
`;
const Value = styled.div``;
