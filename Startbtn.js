let active = document.querySelector('.StartPause');
var sound = document.getElementById('Click');

function Active(){
    active.classList.toggle('active');
    if (active.classList.contains('active')){
        active.innerHTML = "PAUSE";
    }
    else{
        active.innerHTML = "START";
    }
}