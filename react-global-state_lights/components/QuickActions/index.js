import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ onLightsOff, onLightsOn, number }) {
  return (
    <StyledQuickActions>
      {number > 0 && (
        <Button
          type="button"
          onClick={() => {
            onLightsOff();
            console.log(number);
          }}
        >
          Turn all lights off
        </Button>
      )}
      {number !== 8 && (
        <Button
          type="button"
          onClick={() => {
            onLightsOn();
          }}
        >
          Turn all lights on
        </Button>
      )}
    </StyledQuickActions>
  );
}
