
function date (){


const date1 = new Date()
const date2 = new Date("2028-07-14T00:00:00");

const dateDiff =date2-date1;
const days = Math.floor(dateDiff/(1000*60*60*24));
const hours= Math.floor((dateDiff/(1000*60*60))%24);
const minutes= Math.floor((dateDiff/(1000*60))%60);
const seconds=Math.floor((dateDiff/1000)%60);

console.log(`OlmpicsCountdownTime :Days:${days},Hours:${hours},Minutes:${minutes},second:${second}`);

}
//  const date = date();
 

function timing(){



const timer = document.getElementById('root');
const now = new Date();
const IndianTime = now.toLocaleTimeString();
timer.innerHTML = IndianTime;

}



timing();



setInterval(timing,1000);
const timer = document.getElementById('root');
timer.style.fontSize = "60px"
timer.style.display ="flex";
timer.style.height ="100vh";
timer.style.justifyContent="center";
timer.style.backgroundColor ="orange";
timer.style.alignItems="center"