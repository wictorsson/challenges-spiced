import Link from "../components/Link";

export default function HomePage({ number }) {
  return (
    <div>
      <h1>Home</h1>
      <p>{number} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
