let activenow = document.querySelector('.StartPause');
var timer = document.getElementById('Session');
Sextime = 0;

function Turnon(){
    if (activenow.classList.contains('active')){   
        SessionTime = setInterval(() => {
            var oventime = document.getElementById('OvenTime');
            if (oventime.innerHTML == "00:00"){
                clearInterval(SessionTime);
            }

            hour = (Sextime-Sextime%3600)/3600;
            if (hour < 10){
                hour = hour.toString();
                hour = "0" + hour;
            }

            minute = (Sextime-Sextime%60)/60;
            if (minute < 10){
                minute = minute.toString();
                minute = "0" + minute;
            }

            second = Sextime%60;
            if (second < 10){
                second = second.toString();
                second = "0" + second; 
            }

            Sextime++

            timer.innerHTML = hour + ":" + minute + ":" + second;
        }, 1000);

    }
    else{
        clearInterval(SessionTime)
    }
}
