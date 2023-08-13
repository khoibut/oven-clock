valueVolume=document.getElementById("valueVolume")
sliderVolume=document.getElementById("sliderVolume")
valueVolume.innerHTML=sliderVolume.value+"%";
sound.volume=sliderVolume.value/100;
sliderVolume.oninput= ()=>{
    localStorage.setItem("volume",sliderVolume.value);
    valueVolume.innerHTML=sliderVolume.value+"%";
    sound.volume=sliderVolume.value/100;
}