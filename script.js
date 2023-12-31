
import { Theme } from "./JS/Theme.js";
import { Clock } from "./JS/clock.js";
import { GenerateOptions } from "./JS/generateOptions.js";
import { Alarm } from "./JS/alarm.js";

 const ringtone = new Audio("animal.mp3");

export const dt = document.querySelector(".dt");
export const tm = document.querySelector(".tm");
export const selectMenu = document.querySelectorAll("select");

Theme();
Clock();
GenerateOptions();
Alarm();

