time=5
function updateTimer(){
    if(time>=0)
    {
        minute=(time-time%60)/60;
        minute=minute.toString();
        if(minute.length<2){
            minute="0"+minute;
        }
        second=time%60;
        second=second.toString();
        if(second.length<2){
        second="0"+second;
        }
        currenttime=document.createTextNode(minute+":"+second)
        if(document.getElementById("OvenTime")!=null){
            Oven.removeChild(document.getElementById("OvenTime"))
        }
        Timer=document.createElement("div")
        Timer.appendChild(currenttime)
        Timer.setAttribute("id","OvenTime")
        Oven.appendChild(Timer);
        time--;
    }
}
let active = document.querySelector('.StartPause');
var sound = document.getElementById('Click');

function Active(){
    active.classList.toggle('active');
    if (active.classList.contains('active')){
        active.innerHTML = "PAUSE";
        if(time>0){
            updateTimer();
            Oventime=setInterval(() => {
                if(time<=0){
                    new Audio("Audio/Ding.mp3").play();
                    clearInterval(Oventime)
                }
                minute=(time-time%60)/60;
                minute=minute.toString();
                if(minute.length<2){
                    minute="0"+minute;
                }
                second=time%60;
                second=second.toString();
                if(second.length<2){
                    second="0"+second;
                }
                currenttime=document.createTextNode(minute+":"+second)
                if(document.getElementById("OvenTime")!=null){
                    Oven.removeChild(document.getElementById("OvenTime"))
                }
                Timer=document.createElement("div")
                Timer.appendChild(currenttime)
                Timer.setAttribute("id","OvenTime")
                Oven.appendChild(Timer);
                time--;
            }, 1000);
        }
    }
    else{
        clearInterval(Oventime);
        active.innerHTML = "START";
    }
}
Oven=document.getElementById("OvenTimer");