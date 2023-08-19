let applesound = new Audio("Audio/pencil_check_mark_1-88805.mp3");
let dragendSound= new Audio("Audio/shooting-sound-fx-159024.mp3");
let trashsound = new Audio("Audio/pop-1-35897.mp3");

function Add(Task){
    ul=document.getElementById("TaskList");
    li=document.createElement("li");
    li.appendChild(document.createTextNode(Task));
    li.setAttribute("draggable","true");
    li.setAttribute("class","draggable");
    Trash=document.createElement("img");
    Trash.setAttribute("src","Images/Trash.png");
    Trash.setAttribute("class","Trash");
    Trash.setAttribute("draggable","false");
    li.appendChild(Trash);
    ul.appendChild(li);
    Trash.addEventListener("click",function(){
        this.parentElement.remove();
        trashsoundtemp=trashsound.cloneNode(true);
        trashsoundtemp.volume=sound.volume;
        trashsoundtemp.play();
    })
    li.addEventListener('dragstart',function(){
        this.classList.add("dragging");
    })
    li.addEventListener("dragend",function(){
        dragendSound.volume=sound.volume;
        dragendSound.play();
        this.classList.remove("dragging");
    })
    ul.addEventListener("dragover",function(e){
        e.preventDefault();
        dragging=document.querySelector(".dragging");
        draggableElements=[...ul.querySelectorAll(".draggable:not(.dragging)")]
        y=e.clientY;
        distance=Number.NEGATIVE_INFINITY;
        child=null;
        for(i=0;i<draggableElements.length;i++){
            box=draggableElements[i].getBoundingClientRect();
            offset=y-box.top-box.height/2;
            if(offset>distance && offset<0){
                distance=offset;
                child=draggableElements[i];
            }
        }
        if(child==null){
            ul.appendChild(dragging);
        }else{
            ul.insertBefore(dragging,child);
        }
    })
}
document.getElementById("Apple").addEventListener("click",()=>{
    Task=document.getElementById("Task").value;
    if (Task.length>0){
        applesound.volume=sound.volume;
        applesound.play();
        Add(Task)
    }
    document.getElementById("Task").value='';
});
TaskList=document.getElementById("TaskList");