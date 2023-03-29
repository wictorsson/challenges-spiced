import styled from "styled-components";
import Light from "../Light";
import { useState } from "react";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ rooms, setRooms }) {
  return (
    <StyledLights>
      {rooms.map((room) => (
        <li key={room.id}>
          <Light
            name={room.name}
            isOn={room.isOn}
            id={room.id}
            onToggle={setRooms}
          />
        </li>
      ))}
    </StyledLights>
  );
}
