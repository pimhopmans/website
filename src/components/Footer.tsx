import styled from "styled-components";
import { BreakPoint, media } from "../lib/layout";

export const Footer = () => {
  return (
    <Container>
      <Body>© 2024 by Pim Hopmans. Made with React + Vite.</Body>
    </Container>
  );
};

const Container = styled.div`
  width: 480px;
  margin: 0 auto;

  ${media(BreakPoint.s)} {
    width: 300px;
  }
`;
const Body = styled.div`
  display: flex;
  justify-content: center;
  font-family: "CormorantGaramond-Regular";
  font-size: 14px;
  padding: 5px 0;
`;
