//LOADING SOUNDS
// var bSound;
// bSound = new sound("./sounds/B.wav");
// var cSound;
// cSound = new sound("./sounds/C.wav");
// var letters = {A = "letterA", B = "letterB"};
var aSound;
aSound = new sound("./sounds/A.wav");
var bSound;
bSound = new sound("./sounds/B.wav");

var letterA = document.getElementById("letterA");
letterA.addEventListener("touchstart", playSound);
var letterB = document.getElementById("letterB");
letterB.addEventListener("touchstart", playSound);

function playSound (event) {
    // aSound.play();
    switch(event.target.innerText) {
        case "A":
            console.log("A");
            aSound.play();
            break;
        case "B":
            console.log("B");
            bSound.play();
            break;
        default:
            console.log("default case");
            break;
    }
}
function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}