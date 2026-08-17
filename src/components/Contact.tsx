import styled from "styled-components";
import contactData from "../assets/data/contact.json";
import { BreakPoint, media } from "../lib/layout";
import { colors } from "../lib/colors";

export const Contact = () => {
  return (
    <Container id="contact">
      <Title>
        Contact <Rule />
      </Title>

      <ContactInfo>
        <Contacts>
          <Label>Email</Label>
          <Value>{contactData.email}</Value>
        </Contacts>
        <Contacts>
          <Label>Location</Label>
          <Value>{contactData.location}</Value>
        </Contacts>
        <Contacts>
          <Label>Website</Label>
          <Value>{contactData.website}</Value>
        </Contacts>
      </ContactInfo>

      <Socials>
        <Social href="https://github.com/pimhopmans" target="_blank">
          GitHub
        </Social>
        <Divider>•</Divider>
        <Social
          href="https://www.linkedin.com/in/pim-hopmans-b758a7171/"
          target="_blank"
        >
          LinkedIn
        </Social>
        <Divider>•</Divider>
        <Social href="https://www.instagram.com/pimhopmans/" target="_blank">
          Instagram
        </Social>
      </Socials>
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
const Rule = styled.div`
  flex: 1;
  height: 0;
  border-bottom: 1px solid ${colors.rule};
  margin: 0 20px;
`;
const ContactInfo = styled.div`
  padding-left: 10px;
`;
const Contacts = styled.div`
  display: flex;
  flex-direction: row;

  ${media(BreakPoint.s)} {
    justify-content: center;
  }
`;
const Label = styled.div`
  font-family: "Montserrat-Bold";
  color: ${colors.accent};
  margin-right: 10px;
  flex: 0 0 80px;

  ${media(BreakPoint.s)} {
    flex: none;
  }
`;
const Value = styled.div``;
const Socials = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  margin-top: 20px;

  ${media(BreakPoint.s)} {
    justify-content: center;
  }
`;
const Social = styled.a`
  color: black;
`;
const Divider = styled.span`
  margin: 0 3px;
`;
