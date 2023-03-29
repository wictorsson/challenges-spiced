import Link from "../components/Link";
import Lights from "../components/Lights";

export default function Rooms({ rooms, onSetRooms }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Lights</h1>
      <Lights rooms={rooms} setRooms={onSetRooms} />
    </>
  );
}
