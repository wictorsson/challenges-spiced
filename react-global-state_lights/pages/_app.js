import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [rooms, setRooms] = useState([
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: true },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: false },
  ]);

  function handleToggle(id) {
    setRooms(
      rooms.map((room) =>
        room.id === id ? { ...room, isOn: !room.isOn } : room
      )
    );
  }

  function countOn() {
    return rooms.filter((room) => room.isOn).length;
  }

  function allLightsOff() {
    setRooms(
      rooms.map((room) => {
        return {
          ...room,
          isOn: false,
        };
      })
    );
  }

  function allLightsOn() {
    setRooms(
      rooms.map((room) => {
        return {
          ...room,
          isOn: true,
        };
      })
    );
  }

  return (
    <Layout isDimmed={countOn() === 0 ? true : false}>
      <GlobalStyle />
      <Component
        {...pageProps}
        rooms={rooms}
        onSetRooms={handleToggle}
        number={countOn()}
        allLightsOff={allLightsOff}
        allLightsOn={allLightsOn}
      />
    </Layout>
  );
}
