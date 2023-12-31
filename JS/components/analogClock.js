export const analogClock=()=>{
    const date=new Date();
   let hour=date.getHours();
   let minute=date.getMinutes();
   let second=date.getSeconds();
   const hour_hand=document.querySelector(".h-hand");
   const minute_hand=document.querySelector(".m-hand")
   const second_hand=document.querySelector(".s-hand")
   const hour_rotate=30 * hour + minute /2;
   const minute_rotate= minute *6;
   const second_rotate= second *6;

   hour_hand.style.transform=`rotate(${hour_rotate}deg)`;
   minute_hand.style.transform=`rotate(${minute_rotate}deg)`;
   second_hand.style.transform=`rotate(${second_rotate}deg)`;










 
   


  }