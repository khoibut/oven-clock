let moved=false;
const gear = document.getElementById("gear");
const save = document.getElementById("save");
const load = document.getElementById("load");
let basketsound = new Audio("Audio/wood-crack-1-105890.mp3");

let opacity=0;
let clicked=false;
document.getElementById("Basket").addEventListener("click", () => {
    {
        if(windowOn==false){

            basketsound.play();
            if(clicked==false){
                clicked=true;
                gear.style.display="inline";
                save.style.display="inline";
                load.style.display="inline";
                if(moved==false){
                    document.getElementById("Basket").style.marginLeft = "-750px";
                    appear=setInterval(() => {
                        opacity+=0.1;
                        gear.style.opacity = opacity;
                        save.style.opacity = opacity;
                        load.style.opacity = opacity;
                        if(opacity >= 1){
                            clicked=false;
                            moved=true;
                            opacity=1;
                            basketsound.pause();
                            basketsound.currentTime=1;
                            clearInterval(appear);
                            basketsound.pause();
                        }
                    }, 50);
    
                }else{
                    disappear=setInterval(() => {
                        gear.style.opacity = opacity;
                        save.style.opacity = opacity;
                        load.style.opacity = opacity;
                        opacity-=0.1;
                        if(opacity <= 0){
                            gear.style.display="none";
                            save.style.display="none";
                            load.style.display="none";
                            clicked=false;
                            moved=false;
                            opacity=0;
                            basketsound.pause();
                            basketsound.currentTime=0;
                            document.getElementById("Basket").style.marginLeft = "0px";
                            clearInterval(disappear);
                        }
                    }, 15);
                }
            }
        }
    }
});




