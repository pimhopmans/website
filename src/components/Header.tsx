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

  @media print {
    padding: 0;
    background: rgb(117, 80, 166);
    background: linear-gradient(
      135deg,
      rgba(184, 165, 206, 1) 0%,
      rgba(117, 80, 166, 1) 100%
    );
  }
`;
const PageTitle = styled.span`
  font-family: "CormorantGaramond-Regular";
  font-size: 18px;

  @media print {
    padding-left: 75px;
    color: white;
    font-size: 30px;
  }
`;
const Nav = styled.div`
  display: flex;
  height: 75px;
  align-items: center;
  gap: 15px;

  @media print {
    display: none;
  }
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
