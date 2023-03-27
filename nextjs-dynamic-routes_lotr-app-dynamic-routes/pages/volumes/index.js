import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data.js";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.title}>
            {<Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>}
          </li>
        ))}
      </ul>
    </>
  );
}
