text=document.getElementById("Scroll-text")
container=document.getElementById("Scrolling")
percent=120
setInterval(() => {
    il=document.getElementsByClassName("draggable")
    if(currentbreak==true){
        text.innerHTML="break"
    }else{
        if(il[0]==null){
            text.innerHTML=""
        }else{
            if(text.innerHTML==""){
                percent=120
            }
            text.innerHTML=il[0].innerHTML.replace('<img src="Images/Trash.png" class="Trash" draggable="false">',"")
        }
    }
    boxtext=text.getBoundingClientRect()
    boxcontainer=container.getBoundingClientRect()
    text.style.left=percent+"%";
    percent=percent-0.1;
    if(boxtext.right<=boxcontainer.left){
        percent=120;
    }
}, 1);