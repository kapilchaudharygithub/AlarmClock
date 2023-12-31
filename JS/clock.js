import { digitalClock } from "./components/digitalClock.js";
import { analogClock } from "./components/analogClock.js";

export const Clock = () => {
    setInterval(digitalClock, 1000);
    setInterval(analogClock, 1000);
};
