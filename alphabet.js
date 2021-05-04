//LOADING SOUNDS
let aSound = new sound("./sounds/A.wav");
let bSound = new sound("./sounds/B.wav");
let cSound = new sound("./sounds/C.wav");
let dSound = new sound("./sounds/D.wav");
let eSound = new sound("./sounds/E.wav");
let fSound = new sound("./sounds/F.wav");
let gSound = new sound("./sounds/G.wav");
let hSound = new sound("./sounds/H.wav");
let iSound = new sound("./sounds/I.wav");
let jSound = new sound("./sounds/J.wav");
let kSound = new sound("./sounds/K.wav");
let lSound = new sound("./sounds/L.wav");
let mSound = new sound("./sounds/M.wav");
let nSound = new sound("./sounds/N.wav");
let oSound = new sound("./sounds/O.wav");
let pSound = new sound("./sounds/P.wav");
let qSound = new sound("./sounds/Q.wav");
let rSound = new sound("./sounds/R.wav");
let sSound = new sound("./sounds/S.wav");
let tSound = new sound("./sounds/T.wav");
let uSound = new sound("./sounds/U.wav");
let vSound = new sound("./sounds/V.wav");
let wSound = new sound("./sounds/W.wav");
let xSound = new sound("./sounds/X.wav");
let ySound = new sound("./sounds/Y.wav");
let zSound = new sound("./sounds/Z.wav");

//GETTING THE TOUCH EVENT
let letterA = document.getElementById("letterA");
letterA.addEventListener("touchstart", playSound);
let letterB = document.getElementById("letterB");
letterB.addEventListener("touchstart", playSound);
let letterC = document.getElementById("letterC");
letterC.addEventListener("touchstart", playSound);
let letterD = document.getElementById("letterD");
letterD.addEventListener("touchstart", playSound);
let letterE = document.getElementById("letterE");
letterE.addEventListener("touchstart", playSound);
let letterF = document.getElementById("letterF");
letterF.addEventListener("touchstart", playSound);
let letterG = document.getElementById("letterG");
letterG.addEventListener("touchstart", playSound);
let letterH = document.getElementById("letterH");
letterH.addEventListener("touchstart", playSound);
let letterI = document.getElementById("letterI");
letterI.addEventListener("touchstart", playSound);
let letterJ = document.getElementById("letterJ");
letterJ.addEventListener("touchstart", playSound);
let letterK = document.getElementById("letterK");
letterK.addEventListener("touchstart", playSound);
let letterL = document.getElementById("letterL");
letterL.addEventListener("touchstart", playSound);
let letterM = document.getElementById("letterM");
letterM.addEventListener("touchstart", playSound);
let letterN = document.getElementById("letterN");
letterN.addEventListener("touchstart", playSound);
let letterO = document.getElementById("letterO");
letterO.addEventListener("touchstart", playSound);
let letterP = document.getElementById("letterP");
letterP.addEventListener("touchstart", playSound);
let letterQ = document.getElementById("letterQ");
letterQ.addEventListener("touchstart", playSound);
let letterR = document.getElementById("letterR");
letterR.addEventListener("touchstart", playSound);
let letterS = document.getElementById("letterS");
letterS.addEventListener("touchstart", playSound);
let letterT = document.getElementById("letterT");
letterT.addEventListener("touchstart", playSound);
let letterU = document.getElementById("letterU");
letterU.addEventListener("touchstart", playSound);
let letterV = document.getElementById("letterV");
letterV.addEventListener("touchstart", playSound);
let letterW = document.getElementById("letterW");
letterW.addEventListener("touchstart", playSound);
let letterX = document.getElementById("letterX");
letterX.addEventListener("touchstart", playSound);
let letterY = document.getElementById("letterY");
letterY.addEventListener("touchstart", playSound);
let letterZ = document.getElementById("letterZ");
letterZ.addEventListener("touchstart", playSound);

//GETTING THE CLICK EVENT
letterA.addEventListener("click",playSound);
letterB.addEventListener("click",playSound);
letterC.addEventListener("click",playSound);
letterD.addEventListener("click",playSound);
letterE.addEventListener("click",playSound);
letterF.addEventListener("click",playSound);
letterG.addEventListener("click",playSound);
letterH.addEventListener("click",playSound);
letterI.addEventListener("click",playSound);
letterJ.addEventListener("click",playSound);
letterK.addEventListener("click",playSound);
letterL.addEventListener("click",playSound);
letterM.addEventListener("click",playSound);
letterN.addEventListener("click",playSound);
letterO.addEventListener("click",playSound);
letterP.addEventListener("click",playSound);
letterQ.addEventListener("click",playSound);
letterR.addEventListener("click",playSound);
letterS.addEventListener("click",playSound);
letterT.addEventListener("click",playSound);
letterU.addEventListener("click",playSound);
letterV.addEventListener("click",playSound);
letterW.addEventListener("click",playSound);
letterX.addEventListener("click",playSound);
letterY.addEventListener("click",playSound);
letterZ.addEventListener("click",playSound);

//SPELL IT BUTTON CLICK AND TOUCH
let spellButton = document.getElementById("submitButton");
spellButton.addEventListener("click", spellSound);

//SPELL SOUND FUNCTION

//timer (for spell function)
const timer = ms => new Promise(res => setTimeout(res, ms))

async function spellSound() {
    let word = document.getElementById("inputText").value;
    word = word.toUpperCase();
    let wordLength= word.length;
    for(let i=0; i<wordLength; i++) {
        spellFunction(word.charAt(i));
        console.log(word.charAt(i));
        await timer(1000);
    }
}

//MAIN "PLAYSOUND" FUNCTION
function playSound (event) {
    soundMaker(event.target.innerText);
}

//SPELL "PLAYSOUND" FUNCTION
function spellFunction (letter) {
    soundMaker(letter);
}
function soundMaker(letter) {
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
            console.log("default case");
            break;
    }
}
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