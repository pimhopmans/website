import styled from "styled-components";
import { BreakPoint, media } from "../lib/layout";

export const Contact = () => {
  return (
    <Container id="bio">
      <Title>
        Contact <Divider />
      </Title>

      <ContactInfo>
        <Contacts>
          <Label>Email</Label>
          <Value>info@pimhopmans.nl</Value>
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
  margin-right: 10px;
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
