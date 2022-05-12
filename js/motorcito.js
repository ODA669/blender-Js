var estadoLicuadora = "apagada";
var botonLicuadora = document.getElementById("blender-button-sound");
var sonidoLicuadora = document.getElementById("blender-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora(){
    if(estadoLicuadora == "apagada"){
        estadoLicuadora = "encendido";
        hacerBrrBrr();
        licuadora.classList.add("active");
        // console.log("me encendiste");
    }else{
        estadoLicuadora ="apagada";
        hacerBrrBrr();
        licuadora.classList.remove("active");
        // console.log("me apagaste");
    }
}

function hacerBrrBrr(){
    if(sonidoLicuadora.paused ){
        botonLicuadora.play();
        sonidoLicuadora.play();
        
    }else{
        // botonLicuadora.Play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}