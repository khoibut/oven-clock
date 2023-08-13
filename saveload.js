saveicon=document.getElementById("save")
loadicon=document.getElementById("load")
saveicon.addEventListener("click",()=>{
    tasks=document.getElementsByClassName("draggable")
    localStorage.setItem("TaskLength",tasks.length)
    for(i=0;i<tasks.length;i++){
        localStorage.setItem(`task${i}`,tasks[i].innerHTML.replace('<img src="Images/Trash.png" class="Trash" draggable="false">',""))
    }
})
loadicon.addEventListener("click",()=>{
    tasks=[...document.querySelectorAll(".draggable")]
    list=document.getElementById("TaskList")
    tasks.forEach(element => {
        list.removeChild(element);
    });
    for(i=0;i<localStorage.getItem("TaskLength");i++){
        Add(localStorage.getItem(`task${i}`))
    }
})