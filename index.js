const steps = document.querySelectorAll(".steps"),
    buttons = document.querySelectorAll(".btn"),
    nextBtn = document.querySelector(".btn-next"),
    options = document.querySelectorAll(".options-btn"),
    okBtn = document.querySelector(".ok-btn"),
    defaultOutfit = document.querySelector(".default-outfit"),
    defaultBg = document.querySelector(".default-bg"),
    hand = document.querySelector(".hand"),
    introText = document.querySelector(".intro-text"),
    emoji = document.querySelector(".emoji"),
    emojiWrap = document.querySelector(".emoji-wrap"),
    ctaBtn = document.querySelector(".cta-btn");
let currentStep = 1;


nextBtn.addEventListener("click", nextStep);

buttons.forEach(item => item.addEventListener("click", () => {
    document.querySelector(".btn-sound").play();
}))


function nextStep() {
    currentStep++;

    console.log("step up")

    for (let i = 1; i <= steps.length; i++) {
        i === currentStep
            ? document.querySelector(`.step-${[i]}`).classList.add("active")
            : document.querySelector(`.step-${[i]}`).classList.remove("active")

    }
}

options.forEach(item => item.addEventListener("click", chooseOutfit));

function chooseOutfit() {
    hand.style.display = "none";
    introText.style.display = "none";
    options.forEach(item => item.classList.remove("selected"));

    emojiWrap.classList.remove("run-animation");
    void emojiWrap.offsetWidth;
    emojiWrap.classList.add("run-animation");

    this.classList.add("selected");
    let selectedOutfitId = this.id;
    defaultOutfit.src = `${path}Outfit${selectedOutfitId}.png`;
    emoji.src = `${path}EmojiOutfit${selectedOutfitId}.png`;

    okBtn.src = `${path}ButtonOkYellow.png`;

    okBtn.addEventListener("click", setOutfit);

    function setOutfit() {
        nextStep();
        document.querySelector(".step-3").classList.add("active");


        document.querySelector(".default-audio").pause()
        document.querySelector(".cry-sound").play()

        defaultOutfit.style.display = "none";
        defaultBg.src = `${path}BG2.${selectedOutfitId}.jpg`;
    }
}



const userAgent = navigator.userAgent || navigator.vendor || window.opera;
// Windows Phone must come first because its UA also contains "Android"


(/android/i.test(userAgent)) ? ctaBtn.href = "https://play.google.com/store/apps/details?id=com.style.fashion.game.suitsme" : "https://apps.apple.com/ua/app/suitsme-luxury-dress-up-game/id1536929374?l=eng"



console.clear();