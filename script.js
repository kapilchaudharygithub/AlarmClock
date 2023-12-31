
import { Theme } from "./JS/Theme.js";
import { Clock } from "./JS/clock.js";
import { GenerateOptions } from "./JS/generateOptions.js";
import { Alarm } from "./JS/alarm.js";

export const dt = document.querySelector(".dt");
export const tm = document.querySelector(".tm");
export const selectMenu = document.querySelectorAll("select");
export const ringtone = new Audio("./audio/Alarm-Ringtone.mp3");

Theme();
Clock();
GenerateOptions();
Alarm();

