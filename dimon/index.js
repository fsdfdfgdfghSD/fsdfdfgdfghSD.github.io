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