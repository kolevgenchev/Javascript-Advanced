// function attachEventsListeners() {
//     let allInputs=document.querySelectorAll('div input')
//     let inputDaysElement=document.getElementById('days')
//     let inputHoursElement=document.getElementById('hours')
//     let inputMinutesElement=document.getElementById('minutes')
//     let inputSecondsElement=document.getElementById('seconds')
    
//     for(let i=0;i<allInputs.length;i+=2){
//     let currentInputFieldEl=allInputs[i]
//     let currentButtonFieldEl=allInputs[i+1]
//     currentInputFieldEl.addEventListener('change',()=>{
//     let value=Number(currentInputFieldEl.value)
//     let kindOfValue=currentButtonFieldEl.id
//     currentButtonFieldEl.addEventListener('click',()=>{
        
//         switch(kindOfValue){
//             case 'daysBtn':
//                 inputHoursElement.value=value*24,
//                 inputMinutesElement.value=value*1440,
//                 inputSecondsElement.value=value*86400 ;break;
//             case 'hoursBtn':
//                 inputDaysElement.value=value/24,
//                 inputMinutesElement.value=value*60,
//                 inputSecondsElement.value=value*3600 ;break;
//             case 'minutesBtn':
//                 inputHoursElement.value=value/60,
//                 inputSecondsElement.value=value*60,
//                 inputDaysElement.value=value/1440;break;
//             case 'secondsBtn':
//                 inputHoursElement.value=value/3600,
//                 inputMinutesElement.value=value/60,
//                 inputDaysElement.value=value/86400;break;
//         }
//         stopPropagation() 
//     })
    
//     })
//     }
      
//     }



function attachEventsListeners() {
const daysBtn = document.getElementById("daysBtn");
const hoursBtn = document.getElementById("hoursBtn");
const minutesBtn = document.getElementById("minutesBtn");
const secondsBtn = document.getElementById("secondsBtn");

const daysInput = document.getElementById("days");
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

daysBtn.addEventListener("click", () => {
  const value = Number(daysInput.value);
  hoursInput.value = value * 24;
  minutesInput.value = value * 1440;
  secondsInput.value = value * 86400;
});

hoursBtn.addEventListener("click", () => {
  const value = Number(hoursInput.value);
  daysInput.value = value / 24;
  minutesInput.value = value * 60;
  secondsInput.value = value * 3600;
});

minutesBtn.addEventListener("click", () => {
  const value = Number(minutesInput.value);
  daysInput.value = value / 1440;
  hoursInput.value = value / 60;
  secondsInput.value = value * 60;
});

secondsBtn.addEventListener("click", () => {
  const value = Number(secondsInput.value);
  daysInput.value = value / 86400;
  hoursInput.value = value / 3600;
  minutesInput.value = value / 60;
});
}