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
currentbreak=false;
cycle=0
longbreak=4;
worktime=10
shortbreaktime=5
longbreaktime=7
time=worktime
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
                todolist=document.getElementById("TaskList")
                task=document.getElementsByClassName("draggable")
                if(time>0){
                    time--;
                    oven.innerHTML=currentTime(time)
                }
                if(time==0){
                    if (currentbreak==false){
                        percent=120;
                        cycle++
                        if(task.length>0){
                            todolist.removeChild(task[0])
                        }
                        currentbreak=true;
                        oven.style.color="aqua";
                        if(cycle==longbreak){
                            time=longbreaktime;
                            cycle=0;
                        }else{
                            time=shortbreaktime;
                        }
                    }else{
                        percent=120;
                        currentbreak=false;
                        oven.style.color="orange";
                        time=worktime;
                    }
                    new Audio("Audio/Ding.mp3").play();
                    active.classList.remove('active');
                    oven.innerHTML=currentTime(time);
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