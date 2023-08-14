let windowOn=false;
const settingwindow = document.getElementById('window');
const saveAndLoad = document.getElementById('save-and-load');
let gearsound = new Audio("Audio/revolver-chamber-spin-ratchet-sound-90521.mp3")

const windowslidein=[
    {transform: "scaleY(0) "},
    {transform: "scaleY(1)"},
];
const windowslideout=[
    {transform: "scale(1) "},
    {transform: "scale(0)"},
];
const gearspin=[
    {transform:"rotate(0deg)"},
    {transform: "rotate(360deg)"},
]
const gearspinback = [
    {transform:"rotate(0deg)"},
    {transform: "rotate(-360deg)"},
]
const geartiming = {
    duration:220,
    iteration:1,
}
const windowtiming={
    duration: 250,
    iteration:1,
}

document.getElementById('gear').addEventListener('click', ()=>{
    if(clicked==false){
        gearsound.play();
        clicked=true;
        if(windowOn==false){
            gear.animate(gearspin,geartiming);
            windowOn=true;
            settingwindow.style.display="inline";
            settingwindow.animate(windowslidein, windowtiming)
            fadeOut=setInterval(()=>{
                saveAndLoad.style.opacity = opacity;
                opacity-=0.1;
                if(opacity <= 0){
                    gearsound.pause();
                    gearsound.currentTime=0;
                    clicked=false;
                    saveAndLoad.style.opacity=0;
                    clearInterval(fadeOut);
                }
            }, 50);
        }else{
            gear.animate(gearspinback,geartiming);
            windowOn=false;
            settingwindow.animate(windowslideout, windowtiming)
            fadeIn=setInterval(()=>{
                saveAndLoad.style.opacity = opacity;
                opacity+=0.1;
                if(opacity >= 1){
                    gearsound.pause();
                    gearsound.currentTime=0;
                    clicked=false;
                    saveAndLoad.style.opacity=1;
                    clearInterval(fadeIn);
                }
                settingwindow.style.display="none";
            }, 50);
        }

    }
})




