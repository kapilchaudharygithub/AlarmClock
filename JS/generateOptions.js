import { selectMenu } from "../script.js";
export const GenerateOptions=()=>{


const generateOptions = (values, formatter = value => value) => values.map(value => `<option value="${formatter(value)}">${formatter(value)}</option>`);

const hours = Array.from({ length: 12 }, (_, index) => index + 1);
const minutes = Array.from({ length: 60 }, (_, index) => index);
const ampmValues = ['AM', 'PM'];

/** ADDING OPTIONS */

const optionsHours = generateOptions(hours, i => (i < 10 ? `0${i}` : `${i}`));
const optionsMinutes = generateOptions(minutes, value => (value < 10 ? `0${value}` : `${value}`));
const optionsAmPM = generateOptions(ampmValues);

selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", optionsHours.join(''));
selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", optionsMinutes.join(''));
selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", optionsAmPM.join(''));

}