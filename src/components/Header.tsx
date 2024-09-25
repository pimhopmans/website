import styled from "styled-components";
import { smoothScroll } from "../lib/scroll";

export const Header = () => {
  return (
    <Container>
      <PageTitle>Curriculum Vitae</PageTitle>
      <Nav>
        <NavItem onClick={() => smoothScroll("#about")}>about</NavItem>
        <NavItem onClick={() => smoothScroll("#experience")}>
          experience
        </NavItem>
        <NavItem onClick={() => smoothScroll("#education")}>education</NavItem>
        <NavItem onClick={() => smoothScroll("#skills")}>skills</NavItem>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const PageTitle = styled.span`
  font-family: "CormorantGaramond-Regular";
  font-size: 18px;
`;
const Nav = styled.div`
  display: flex;
  height: 75px;
  align-items: center;
  gap: 15px;
`;
const NavItem = styled.button`
  color: black;
  border: 0;
  background-color: transparent;
  font-family: "Montserrat-Regular";
  font-size: 16px;
  padding: 0;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
