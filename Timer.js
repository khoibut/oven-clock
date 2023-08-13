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
Workminute=document.getElementById("WorkTimeminute")
Workminute.onchange=()=>{
    if(+Workminute.value>+Workminute.max||+Workminute.value<+Workminute.min||Workminute.value.length<2){
        Workminute.value="00";
        alert("Please type a valid value")
    }else{
        worktime=+Workminute.value*60+ +Worksecond.value
        localStorage.setItem("workminute",Workminute.value)
        if(currentbreak==false){
            time=worktime;
            oven.innerHTML=currentTime(worktime);
        }
    }
}
Worksecond=document.getElementById("WorkTimesecond")
Worksecond.onchange=()=>{
    if(+Worksecond.value>+Worksecond.max||+Worksecond.value<+Worksecond.min||Worksecond.value.length<2){
        Worksecond.value="00";
        alert("Please type a valid value")
    }else{
        worktime=+Workminute.value*60+ +Worksecond.value
        localStorage.setItem("worksecond",Worksecond.value)
        if(currentbreak==false){
            time=worktime;
            oven.innerHTML=currentTime(worktime);   
        }
    }
}
SBreakminute=document.getElementById("SBreakTimeminute")
SBreakminute.onchange=()=>{
    if(+SBreakminute.value>+SBreakminute.max||+SBreakminute.value<+SBreakminute.min||SBreakminute.value.length<2){
        alert("Please type a valid value")
    }else{
        shortbreaktime=+SBreakminute.value*60+ +SBreaksecond.value
        localStorage.setItem("sbminute",SBreakminute.value)
        if(currentbreak==true && cycle>0){
            time=shortbreaktime;
            oven.innerHTML=currentTime(shortbreaktime);
        }
    }
}
SBreaksecond=document.getElementById("SBreakTimesecond")
SBreaksecond.onchange=()=>{
    if(+SBreaksecond.value>+SBreaksecond.max||+SBreaksecond.value<+SBreaksecond.min||SBreaksecond.value.length<2){
        SBreaksecond.value="00";
        alert("Please type a valid value")
    }else{
        shortbreaktime=+SBreakminute.value*60+ +SBreaksecond.value
        localStorage.setItem("sbsecond",SBreaksecond.value)
        if(currentbreak==true && cycle>0){
            time=shortbreaktime;
            oven.innerHTML=currentTime(shortbreaktime);
        }
    }
}
LBreakminute=document.getElementById("LBreakTimeminute")
LBreakminute.onchange=()=>{
    if(+LBreakminute.value>+LBreakminute.max||+LBreakminute.value<+LBreakminute.min||LBreakminute.value.length<2){
        LBreakminute.value="00";
        alert("Please type a valid value")
    }else{
        longbreaktime=+LBreakminute.value*60+ +LBreaksecond.value
        localStorage.setItem("lbminute",LBreakminute.value)
        if(currentbreak==true && cycle==0){
            time=longbreaktime;
            oven.innerHTML=currentTime(longbreaktime);
        }
    }
}
LBreaksecond=document.getElementById("LBreakTimesecond")
LBreaksecond.onchange=()=>{
    if(+LBreaksecond.value>+LBreaksecond.max||+LBreaksecond.value<+LBreaksecond.min||LBreaksecond.value.length<2){
        LBreaksecond.value="00";
        alert("Please type a valid value")
    }else{
        longbreaktime=+LBreakminute.value*60+ +LBreaksecond.value
        localStorage.setItem("lbsecond",LBreaksecond.value)
        if(currentbreak==true && cycle==0){
            time=longbreaktime;
            oven.innerHTML=currentTime(longbreaktime);
        }
    }
}
currentbreak=false;
worktime=1500
cycle=0
longbreak=4;
shortbreaktime=300
longbreaktime=900
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
                    ding=new Audio("Audio/Ding.mp3");
                    console.log(sliderVolume.value)
                    ding.volume=sliderVolume.value/100;
                    ding.play();
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