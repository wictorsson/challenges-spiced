import React from "react";
import styled from "styled-components";

// const StyledBox = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: ${({ isBlack }) => (isBlack ? "black" : "green")};
//   margin: 2rem;

//   &:hover {
//     background-color: red;
//   }
// `;

// export default function BoxWithStyledComponent({ isBlack }) {
//   return <StyledBox isBlack={isBlack} />;
// }

export default styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ isBlack }) => (isBlack ? "black" : "green")};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;
