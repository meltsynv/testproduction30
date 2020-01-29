window.addEventListener("touchstart", touchHandler, false);

function touchHandler(event){
    if(event.touches.lenght > 1){
        event.preventDefoult();
    }
}