let musica = document.getElementById("musica");

function play() {
    musica.play();
}

function pause() {
    musica.pause();
}

function diminuir_vel() {
    musica.playbackRate -= 0.2;
}

function aumentar_vel() {
    musica.playbackRate += 0.1;
}

function diminuirVolume() {
    musica.volume -= 0.2;
}
function aumentarVolume() {
    musica.volume += 0.2;
}

function mudo() {
    musica.volume = 0;
}
