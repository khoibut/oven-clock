function currentTime(time){
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
    return(minute+":"+second);
}
time=5
oven=document.getElementById("OvenTime");
oven.innerHTML=currentTime(time);
let active = document.querySelector('.StartPause');
var sound = document.getElementById('Click');
function Active(){
    active.classList.toggle('active');
    if (active.classList.contains('active')){
        active.innerHTML = "PAUSE";
        if(time>0){
            Oventime=setInterval(() => {
                if(time>0){
                    time--;
                    oven.innerHTML=currentTime(time)
                }
                if(time<=0){
                    new Audio("Audio/Ding.mp3").play();
                    active.classList.remove('active');
                    active.innerHTML = "START";
                    clearInterval(Oventime)
                }
            }, 1000);
        }
    }
    else{
        clearInterval(Oventime);
        active.innerHTML = "START";
    }
}