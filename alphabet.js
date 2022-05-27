"use strict";

//sound constructor
function sound(source){
    this.sound = document.createElement("audio");
    this.sound.src = source;
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

//SPELL SOUND FUNCTION
const soundMaker = letter => {
    switch(letter) {
        case "A":
            aSound.play();
            break;
        case "B":
            bSound.play();
            break;
        case "C":
            cSound.play();
            break;
        case "D":
            dSound.play();
            break;
        case "E":
            eSound.play();
            break;
        case "F":
            fSound.play();
            break;
        case "G":
            gSound.play();
            break;
        case "H":
            hSound.play();
            break;
        case "I":
            iSound.play();
            break;
        case "J":
            jSound.play();
            break;
        case "K":
            kSound.play();
            break;
        case "L":
            lSound.play();
            break;
        case "M":
            mSound.play();
            break;
        case "N":
            nSound.play();
            break;
        case "O":
            oSound.play();
            break;
        case "P":
            pSound.play();
            break;
        case "Q":
            qSound.play();
            break;
        case "R":
            rSound.play();
            break;
        case "S":
            sSound.play();
            break;
        case "T":
            tSound.play();
            break;
        case "U":
            uSound.play();
            break;
        case "V":
            vSound.play();
            break;
        case "W":
            wSound.play();
            break;
        case "X":
            xSound.play();
            break;
        case "Y":
            ySound.play();
            break;
        case "Z":
            zSound.play();
            break;
        default:
            console.log("Sound not founded");
            break;
    }
}

//TIMER (FOR SPELL FUNCTION)
const timer = ms => new Promise(res => setTimeout(res, ms));

async function spellSound() {
    let word = document.getElementById("inputText").value;
    word = word.toUpperCase();
    const wordLength= word.length;
    for(let i=0; i<wordLength; i++) {
        soundMaker(word.charAt(i));
        console.log(word.charAt(i));
        await timer(1000);
    }
}

//MAIN "PLAYSOUND" FUNCTION
const playSound  = event => {
    soundMaker(event.target.innerText);
};

//LOADING SOUNDS
const aSound = new sound("./sounds/A.wav");
const bSound = new sound("./sounds/B.wav");
const cSound = new sound("./sounds/C.wav");
const dSound = new sound("./sounds/D.wav");
const eSound = new sound("./sounds/E.wav");
const fSound = new sound("./sounds/F.wav");
const gSound = new sound("./sounds/G.wav");
const hSound = new sound("./sounds/H.wav");
const iSound = new sound("./sounds/I.wav");
const jSound = new sound("./sounds/J.wav");
const kSound = new sound("./sounds/K.wav");
const lSound = new sound("./sounds/L.wav");
const mSound = new sound("./sounds/M.wav");
const nSound = new sound("./sounds/N.wav");
const oSound = new sound("./sounds/O.wav");
const pSound = new sound("./sounds/P.wav");
const qSound = new sound("./sounds/Q.wav");
const rSound = new sound("./sounds/R.wav");
const sSound = new sound("./sounds/S.wav");
const tSound = new sound("./sounds/T.wav");
const uSound = new sound("./sounds/U.wav");
const vSound = new sound("./sounds/V.wav");
const wSound = new sound("./sounds/W.wav");
const xSound = new sound("./sounds/X.wav");
const ySound = new sound("./sounds/Y.wav");
const zSound = new sound("./sounds/Z.wav");

//ALPHABET EVENTS
const letterA = document.getElementById("letterA");
letterA.addEventListener("touchstart", playSound);
letterA.addEventListener("click",playSound);

const letterB = document.getElementById("letterB");
letterB.addEventListener("touchstart", playSound);
letterB.addEventListener("click",playSound);

const letterC = document.getElementById("letterC");
letterC.addEventListener("touchstart", playSound);
letterC.addEventListener("click",playSound);

const letterD = document.getElementById("letterD");
letterD.addEventListener("touchstart", playSound);
letterD.addEventListener("click",playSound);

const letterE = document.getElementById("letterE");
letterE.addEventListener("touchstart", playSound);
letterE.addEventListener("click",playSound);

const letterF = document.getElementById("letterF");
letterF.addEventListener("touchstart", playSound);
letterF.addEventListener("click",playSound);

const letterG = document.getElementById("letterG");
letterG.addEventListener("touchstart", playSound);
letterG.addEventListener("click",playSound);

const letterH = document.getElementById("letterH");
letterH.addEventListener("touchstart", playSound);
letterH.addEventListener("click",playSound);

const letterI = document.getElementById("letterI");
letterI.addEventListener("touchstart", playSound);
letterI.addEventListener("click",playSound);

const letterJ = document.getElementById("letterJ");
letterJ.addEventListener("touchstart", playSound);
letterJ.addEventListener("click",playSound);

const letterK = document.getElementById("letterK");
letterK.addEventListener("touchstart", playSound);
letterK.addEventListener("click",playSound);

const letterL = document.getElementById("letterL");
letterL.addEventListener("touchstart", playSound);
letterL.addEventListener("click",playSound);

const letterM = document.getElementById("letterM");
letterM.addEventListener("touchstart", playSound);
letterM.addEventListener("click",playSound);

const letterN = document.getElementById("letterN");
letterN.addEventListener("touchstart", playSound);
letterN.addEventListener("click",playSound);

const letterO = document.getElementById("letterO");
letterO.addEventListener("touchstart", playSound);
letterO.addEventListener("click",playSound);

const letterP = document.getElementById("letterP");
letterP.addEventListener("touchstart", playSound);
letterP.addEventListener("click",playSound);

const letterQ = document.getElementById("letterQ");
letterQ.addEventListener("touchstart", playSound);
letterQ.addEventListener("click",playSound);

const letterR = document.getElementById("letterR");
letterR.addEventListener("touchstart", playSound);
letterR.addEventListener("click",playSound);

const letterS = document.getElementById("letterS");
letterS.addEventListener("touchstart", playSound);
letterS.addEventListener("click",playSound);

const letterT = document.getElementById("letterT");
letterT.addEventListener("touchstart", playSound);
letterT.addEventListener("click",playSound);

const letterU = document.getElementById("letterU");
letterU.addEventListener("touchstart", playSound);
letterU.addEventListener("click",playSound);

const letterV = document.getElementById("letterV");
letterV.addEventListener("touchstart", playSound);
letterV.addEventListener("click",playSound);

const letterW = document.getElementById("letterW");
letterW.addEventListener("touchstart", playSound);
letterW.addEventListener("click",playSound);

const letterX = document.getElementById("letterX");
letterX.addEventListener("touchstart", playSound);
letterX.addEventListener("click",playSound);

const letterY = document.getElementById("letterY");
letterY.addEventListener("touchstart", playSound);
letterY.addEventListener("click",playSound);

const letterZ = document.getElementById("letterZ");
letterZ.addEventListener("touchstart", playSound);
letterZ.addEventListener("click",playSound);

//SPELL IT EVENT
const spellButton = document.getElementById("submitButton");
spellButton.addEventListener("click", spellSound);
