const BackgroundSound = document.getElementById("background-sound")
BackgroundSound.volume = 0.1

const Words = [
    "net",
    "hamachii",
    "awooo",
    "fignea polnaia",
    "dimon gandon",
    "sigma creeper",
    "torrent",
    "igruha",
    "Șiii",
    "Șfanta treime",
    "Șcatina",
    "nee hamachi",
    "maincraft",
    "vorr thunderrrr",
    "pubg?",
    "instaleaza war thunder",
    "mecanic",
    "santehnic iobanai",
    "Dimon82008",
    "dimchik blinchik",
    "zima" ,
    "șuca" 
]

function Magic() {
    const Img = document.querySelector("#img")
    const Word = document.getElementById("word")
    const ToggleBtn = document.querySelector("#toggleBtn")

    let BurpSound = new Audio()
    BurpSound.src = "assets/sounds/burp.mp3"
    BurpSound.volume = 1
    BurpSound.play()

    ToggleBtn.style["display"] = "none"

    setTimeout(() => {
        Img.setAttribute("src", "assets/images/Dima.png")
        ToggleBtn.style["display"] = "block"
        ToggleBtn.style["margin"] = "0 auto"
        Img.style["transform"] = "scale(1)"
        Word.innerHTML = "..."
        confetti()
    }, 1000)
         
    Img.setAttribute("src", "assets/images/dima_speaking.png")
    Img.style["transform"] = "scale(0.8)"
    
    Word.innerHTML = get_random_word()
}

function get_random_word() {
    return Words[Math.floor(Math.random() * Words.length)]
}

function catch_handler() {
    let InputListener

    InputListener = function () {
        BackgroundSound.play()
        document.removeEventListener('mousedown', InputListener)
        document.removeEventListener('keydown', InputListener)
    }

    document.addEventListener('mousedown', InputListener)
    document.addEventListener('keydown', InputListener)
}

if (BackgroundSound.readyState > 1) {
    BackgroundSound.play().catch(catch_handler);
} else {
    BackgroundSound.addEventListener('canplay', function () {
        BackgroundSound.play().catch(catch_handler);
    })
}