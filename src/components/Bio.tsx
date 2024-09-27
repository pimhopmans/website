import styled from "styled-components";
import { smoothScroll } from "../lib/scroll";
import { BreakPoint, isMobile, media } from "../lib/layout";
import { MobileProfilePicture } from "./MobileProfilePicture";

export const Bio = () => {
  return (
    <Container id="bio">
      {isMobile && <MobileProfilePicture />}
      <Name>Pim Hopmans</Name>
      <Function>Full-stack Software Engineer</Function>

      <ContactInfo>
        <Contact>
          <Label>Email</Label>
          <Value>info@pimhopmans.nl</Value>
        </Contact>
        <ContactPrint>
          <Label>Phone</Label>
          <Value>+31 6 36493014</Value>
        </ContactPrint>
        <ContactPrint>
          <Label>Website</Label>
          <Value>www.pimhopmans.nl</Value>
        </ContactPrint>
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

      {!isMobile && (
        <ReadMore onClick={() => smoothScroll("#about")}>Read more ∨</ReadMore>
      )}
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
    width: 100%;
    padding: 0 0 50px 60px;
  }
`;
const Name = styled.div`
  font-family: "CormorantGaramond-Bold";
  font-size: 60px;
  font-weight: bold;

  ${media(BreakPoint.s)} {
    font-size: 50px;
    margin-top: 40px;
  }

  @media print {
    font-size: 50px;
    margin-top: 40px;
  }
`;
const Function = styled.div`
  font-size: 25px;
  margin-bottom: 75px;

  ${media(BreakPoint.s)} {
    font-size: 20px;
  }

  @media print {
    font-size: 20px;
  }
`;
const ContactInfo = styled.div``;
const Contact = styled.div`
  display: flex;
  flex-direction: row;

  ${media(BreakPoint.s)} {
    justify-content: center;
  }
`;
const ContactPrint = styled(Contact)`
  display: none;
  padding-top: 10px;

  @media print {
    display: flex;
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
  margin-top: 20px;

  ${media(BreakPoint.s)} {
    justify-content: center;
  }

  @media print {
    display: none;
  }
`;
const Social = styled.a`
  color: black;
`;
const Divider = styled.span`
  margin: 0 3px;
`;
const ReadMore = styled.button`
  display: none;
  border: 0;
  background-color: transparent;
  font-family: "Montserrat-Regular";
  padding: 0;
  margin-top: 200px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  ${media(BreakPoint.m)} {
    display: flex;
  }
  ${media(BreakPoint.xl)} {
    display: none;
  }

  @media print {
    display: none;
  }
`;
