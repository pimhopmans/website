import styled from "styled-components";

export const MobileHeader = () => {
  return (
    <Container>
      <PageTitle>Curriculum Vitae</PageTitle>
    </Container>
  );
};

const Container = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: rgb(117, 80, 166);
  background: linear-gradient(
    135deg,
    rgba(184, 165, 206, 1) 0%,
    rgba(117, 80, 166, 1) 100%
  );
  padding: 0 20px;
`;
const PageTitle = styled.span`
  font-family: "CormorantGaramond-Regular";
  font-size: 18px;
  color: white;
`;
