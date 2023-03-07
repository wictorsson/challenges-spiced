// Implement the launch sequence function here and export it as the default export.
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

export default function launchSequence() {
  loadPayload(NFSAT);
  loadPayload(FISHSAT);
  fuel();

  for (let i = 0; i < 5; ++i) {
    countdown();
  }
  liftoff();
  deployPayload();
}
