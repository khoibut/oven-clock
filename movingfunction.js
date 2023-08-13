let moved=false;
const gear = document.getElementById("gear");
const save = document.getElementById("save");
const load = document.getElementById("load");
let opacity=0;

document.getElementById("Basket").addEventListener("click", function movingfunction(){
    {
        if(!moved){
            moved=true;
            document.getElementById("Basket").style.marginRight = "900px"
            appear=setInterval(() => {
                gear.style.opacity = opacity;
                save.style.opacity = opacity;
                load.style.opacity = opacity;
                opacity+=0.1;
                if(opacity >= 1){
                    opacity=1;
                    clearInterval(appear);
                }
                console.log(opacity);
            }, 50);
        }else{
            moved=false;
            disappear=setInterval(() => {
                opacity-=0.1;
                gear.style.opacity = opacity;
                save.style.opacity = opacity;
                load.style.opacity = opacity;
                if(opacity <= 0){
                    opacity=0;
                    document.getElementById("Basket").style.marginRight = "0px";
                    clearInterval(disappear);
                }
                console.log(opacity);
            }, 5);
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



