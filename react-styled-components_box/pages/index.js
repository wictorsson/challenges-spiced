import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponent from "../components/BoxWithStyledComponents.js";
import styled from "styled-components";
export default function HomePage() {
  const Container = styled.div`
    display: flex;
    direction: row;
  `;

  return (
    <Container>
      <BoxWithClassName />
      <BoxWithClassName isBlack />

      <BoxWithStyledComponent isRound />
      <BoxWithStyledComponent isBlack />
    </Container>
  );
}
