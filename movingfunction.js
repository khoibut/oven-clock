let moved=false;
const gear = document.getElementById("gear");
const save = document.getElementById("save");
const load = document.getElementById("load");
let opacity=0;
let clicked=false;
document.getElementById("Basket").addEventListener("click", function movingfunction(){
    {
        if(clicked==false){
            clicked=true;
            if(!moved){
                document.getElementById("Basket").style.marginLeft = "-750px"
                appear=setInterval(() => {
                    opacity+=0.1;
                    gear.style.opacity = opacity;
                    save.style.opacity = opacity;
                    load.style.opacity = opacity;
                    console.log(opacity);
                    if(opacity >= 1){
                        clicked=false;
                        moved=true;
                        opacity=1;
                        clearInterval(appear);
                    }
                }, 50);
            }else{
                disappear=setInterval(() => {
                    opacity-=0.1;
                    gear.style.opacity = opacity;
                    save.style.opacity = opacity;
                    load.style.opacity = opacity;
                    if(opacity <= 0){
                        clicked=false;
                        moved=false;
                        opacity=0;
                        document.getElementById("Basket").style.marginLeft = "0px";
                        clearInterval(disappear);
                    }
                    console.log(opacity);
                }, 5);
            }
        }
    }
});




//  function appear(){
//     gear.style.opacity = opacity;
//     save.style.opacity = opacity;
//     load.style.opacity = opacity;
//     opacity++;
//     if(opacity == 100){
//         clearInterval(appear());
//     } 
// }



