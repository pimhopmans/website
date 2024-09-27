import styled from "styled-components";
import {
  About,
  Bio,
  Contact,
  Education,
  Experience,
  Footer,
  Header,
  MobileHeader,
  ProfilePicture,
  Skills,
} from "./components";
import { BreakPoint, isDesktop, isMobile, media } from "./lib/layout";

const App = () => {
  return (
    <Container>
      {isMobile && <MobileHeader />}

      <Left>
        <LeftContainer>
          {isDesktop && <Header />}
          <Bio />
          <About />
          <Experience />
          <Print>
            <Education />
            <Skills />
          </Print>
          <Contact />
          <Footer />
        </LeftContainer>
      </Left>

      {isDesktop && (
        <Right>
          <ProfilePicture />
        </Right>
      )}
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;

  ${media(BreakPoint.s)} {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 50%;
  display: flex;

  ${media(BreakPoint.s)} {
    width: 100%;
  }

  @media print {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 50%;

  display: flex;
  background: rgb(117, 80, 166);
  background: linear-gradient(
    135deg,
    rgba(184, 165, 206, 1) 0%,
    rgba(117, 80, 166, 1) 100%
  );

  @media print {
    width: 0%;
  }
`;
const LeftContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media print {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`;
const Print = styled.div`
  @media print {
    display: flex;
    flex-direction: column;
  }
`;
