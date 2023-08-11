time=5
Oven=document.getElementById("OvenTimer");
Oventime=setInterval(() => {
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
    if(minute=="00" && second=="00"){
        clearInterval(Oventime)
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