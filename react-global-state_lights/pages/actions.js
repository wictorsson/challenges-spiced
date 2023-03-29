import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ allLightsOff, allLightsOn, number }) {
  return (
    <>
      <Link href="/">← Back home </Link>
      <h1>Quick Actions</h1>

      <QuickActions
        onLightsOff={() => allLightsOff()}
        onLightsOn={() => allLightsOn()}
        number={number}
      />
    </>
  );
}