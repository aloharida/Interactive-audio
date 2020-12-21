let img = document.querySelector(`#img`)

let sound = document.querySelector(`#sound`)






let playwindsky = function () {
    return sound.paused ? sound.play() : sound.pause();
}
img.addEventListener(`click`, playwindsky)
