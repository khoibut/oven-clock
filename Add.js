function Remove(e){
    console.log(e)
}
function Add(){
    Task=document.getElementById("Task").value;
    ul=document.getElementById("TaskList");
    li=document.createElement("li");
    li.appendChild(document.createTextNode(Task));
    Trash=document.createElement("img");
    Trash.setAttribute("src","Images/Trash.png");
    Trash.setAttribute("class","Trash");
    li.appendChild(Trash);
    ul.appendChild(li);
    var classlength=document.getElementsByClassName("Trash").length;
    document.getElementsByClassName("Trash")[classlength-1].addEventListener("click",function(){
        document.getElementsByClassName("Trash")[classlength-1].parentElement.style.display="none";
    })
}
document.getElementById("Apple").addEventListener("click",Add);