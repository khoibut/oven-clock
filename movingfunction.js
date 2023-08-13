let moved=false;
const gear = document.getElementById("gear");
const save = document.getElementById("save");
const load = document.getElementById("load");
let opacity=0;
let clicked=false;
document.getElementById("Basket").addEventListener("click", () => {
    {
        if(clicked==false){
            gear.style.display="inline";
            save.style.display="inline";
            load.style.display="inline";
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
                        gear.style.display="none";
                        save.style.display="none";
                        load.style.display="none";
                        clicked=false;
                        moved=false;
                        opacity=0;
                        document.getElementById("Basket").style.marginLeft = "0px";
                        clearInterval(disappear);
                    }
                }, 10);
            }
        }
    }
});




