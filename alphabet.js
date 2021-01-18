//LOADING SOUNDS
var aSound;
aSound = new sound("./sounds/A.wav");
var bSound;
bSound = new sound("./sounds/B.wav");
var cSound;
cSound = new sound("./sounds/C.wav");
var dSound;
dSound = new sound("./sounds/D.wav");
var eSound;
eSound = new sound("./sounds/E.wav");
var fSound;
fSound = new sound("./sounds/F.wav");
var gSound;
gSound = new sound("./sounds/G.wav");
var hSound;
hSound = new sound("./sounds/H.wav");
var iSound;
iSound = new sound("./sounds/I.wav");
var jSound;
jSound = new sound("./sounds/J.wav");
var kSound;
kSound = new sound("./sounds/K.wav");
var lSound;
lSound = new sound("./sounds/L.wav");
var mSound;
mSound = new sound("./sounds/M.wav");
var nSound;
nSound = new sound("./sounds/N.wav");
var oSound;
oSound = new sound("./sounds/O.wav");
var pSound;
pSound = new sound("./sounds/P.wav");
var qSound;
qSound = new sound("./sounds/Q.wav");
var rSound;
rSound = new sound("./sounds/R.wav");
var sSound;
sSound = new sound("./sounds/S.wav");
var tSound;
tSound = new sound("./sounds/T.wav");
var uSound;
uSound = new sound("./sounds/U.wav");
var vSound;
vSound = new sound("./sounds/V.wav");
var wSound;
wSound = new sound("./sounds/W.wav");
var xSound;
xSound = new sound("./sounds/X.wav");
var ySound;
ySound = new sound("./sounds/Y.wav");
var zSound;
zSound = new sound("./sounds/Z.wav");

//GETTING THE TOUCH EVENT
var letterA = document.getElementById("letterA");
letterA.addEventListener("touchstart", playSound);
var letterB = document.getElementById("letterB");
letterB.addEventListener("touchstart", playSound);
var letterC = document.getElementById("letterC");
letterC.addEventListener("touchstart", playSound);
var letterD = document.getElementById("letterD");
letterD.addEventListener("touchstart", playSound);
var letterE = document.getElementById("letterE");
letterE.addEventListener("touchstart", playSound);
var letterF = document.getElementById("letterF");
letterF.addEventListener("touchstart", playSound);
var letterG = document.getElementById("letterG");
letterG.addEventListener("touchstart", playSound);
var letterH = document.getElementById("letterH");
letterH.addEventListener("touchstart", playSound);
var letterI = document.getElementById("letterI");
letterI.addEventListener("touchstart", playSound);
var letterJ = document.getElementById("letterJ");
letterJ.addEventListener("touchstart", playSound);
var letterK = document.getElementById("letterK");
letterK.addEventListener("touchstart", playSound);
var letterL = document.getElementById("letterL");
letterL.addEventListener("touchstart", playSound);
var letterM = document.getElementById("letterM");
letterM.addEventListener("touchstart", playSound);
var letterN = document.getElementById("letterN");
letterN.addEventListener("touchstart", playSound);
var letterO = document.getElementById("letterO");
letterO.addEventListener("touchstart", playSound);
var letterP = document.getElementById("letterP");
letterP.addEventListener("touchstart", playSound);
var letterQ = document.getElementById("letterQ");
letterQ.addEventListener("touchstart", playSound);
var letterR = document.getElementById("letterR");
letterR.addEventListener("touchstart", playSound);
var letterS = document.getElementById("letterS");
letterS.addEventListener("touchstart", playSound);
var letterT = document.getElementById("letterT");
letterT.addEventListener("touchstart", playSound);
var letterU = document.getElementById("letterU");
letterU.addEventListener("touchstart", playSound);
var letterV = document.getElementById("letterV");
letterV.addEventListener("touchstart", playSound);
var letterW = document.getElementById("letterW");
letterW.addEventListener("touchstart", playSound);
var letterX = document.getElementById("letterX");
letterX.addEventListener("touchstart", playSound);
var letterY = document.getElementById("letterY");
letterY.addEventListener("touchstart", playSound);
var letterZ = document.getElementById("letterZ");
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

//MAIN "PLAYSOUND" FUNCTION
function playSound (event) {
    // aSound.play();
    switch(event.target.innerText) {
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