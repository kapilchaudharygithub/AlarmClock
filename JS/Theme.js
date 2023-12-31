export const Theme=()=>{
  const theme=document.querySelector(".theme");

theme.addEventListener("click",DarkBright);

function DarkBright(){
    const container=document.querySelector(".container");
    const main=document.querySelector(".main");
    const header=document.querySelector(".header");
    const date=document.querySelector(".date");
    const time=document.querySelector(".time");
    const dateTime=[date,time];
    const analogClock=document.querySelector(".analog-clock");


    const bgColor = getComputedStyle(container).backgroundColor;
  if (bgColor === "rgb(33, 34, 36)" || bgColor === "#212224") {
    container.style.backgroundColor = "antiquewhite";
    main.style.backgroundColor="rgba(222, 184, 135, 0.68)";
    theme.innerText="Dark";
    theme.style.color="#000";
    theme.style.backgroundColor="antiquewhite";
    header.style.color="dimGray"
    dateTime.forEach((item)=>{
        item.style.color="indianred";
    })
    analogClock.style.boxShadow="0 0 2px rgb(0, 0, 0)";
    analogClock.style.backgroundImage="url(./images/clock-black.png)";

  }
  else if (bgColor === "rgb(250, 235, 215)" || bgColor === "antiquewhite") {
    container.style.backgroundColor = "#212224";
    main.style.backgroundColor=" #1F2022";
    theme.innerText="Light";
    theme.style.color="#fff";
    theme.style.backgroundColor="#212224";
    header.style.color="aqua";
    dateTime.forEach((item)=>{
        item.style.color="cadetblue";
    })
    analogClock.style.boxShadow="0 0 2px rgba(173, 52, 52, 0.438)";
    analogClock.style.backgroundImage="url(./images/clock-gold.png)";




   

  }

}
}