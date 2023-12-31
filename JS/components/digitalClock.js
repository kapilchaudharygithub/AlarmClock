import { dt,tm } from "../../script.js";
export const digitalClock=()=>{

   const date=new Date();
   let hour=date.getHours();
   let minute=date.getMinutes();
   let second=date.getSeconds();
   const currentDate=date.getDate();
   const currentMonth=date.getMonth();
   const currentYear=date.getFullYear();
   let ampm="AM";
   const Months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    

   if(hour>12)
   {
       hour-=12;
       ampm="PM";
   }
   if(hour<10){
       hour="0"+hour;
   }

   minute= minute<10 ? "0"+minute : minute;
   second=second<10 ? "0"+second  :second;
   


   dt.innerText=`${currentDate} ${Months[currentMonth]} ${currentYear}`;
   tm.innerText=`${hour}:${minute}:${second} ${ampm}`

  }