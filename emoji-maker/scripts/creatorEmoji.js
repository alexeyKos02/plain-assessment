export function addCreatorEmoji() {
    addCreateSkinsAction()
    addCreateEyesAction()
    addCreateMouthAction()
}

function addCreateSkinsAction() {
    const skins = document.getElementById("select-skin-card").children[1]
    for (let skin of skins.children) {
        skin.addEventListener("click", (e) => createSkin(e))
    }
}

function createSkin(e) {
    const skinSrc = e.target.src
    const skin = document.getElementById("skin")
    skin.src = skinSrc
}

function addCreateEyesAction() {
    const eyesCard = document.getElementById("select-eyes-card")
    const eyesArray = [...eyesCard.children[1].children]
        .concat([...eyesCard.children[2].children])
    for (let eyes of eyesArray) {
        eyes.addEventListener("click", (e) => createEyes(e))
    }
}

function createEyes(e) {
    const skinSrc = e.target.src
    const eyes = document.getElementById("eyes")
    eyes.src = skinSrc
}

function addCreateMouthAction() {
    const mouthCard = document.getElementById("select-mouth-card")
    const mouthArray = [...mouthCard.children[1].children]
        .concat([...mouthCard.children[2].children])
    for (let mouth of mouthArray) {
        mouth.addEventListener("click", (e) => createMouth(e))
    }
}

function createMouth(e) {
    const mouthSrc = e.target.src
    const mouth = document.getElementById("mouth")
    mouth.src = mouthSrc
}