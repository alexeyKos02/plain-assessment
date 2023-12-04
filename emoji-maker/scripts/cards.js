export function addCardCarousel() {
    const selectEyesCardButton_1 = document.getElementById("select-skin-card").lastElementChild
    selectEyesCardButton_1.addEventListener("click", (e) => changeCard(e))

    const selectEyesCardButton_2 = document.getElementById("select-mouth-card").lastElementChild
    selectEyesCardButton_2.addEventListener("click", (e) => changeCard(e))

    const EyeCard = document.getElementById("select-eyes-card")
    const selectMouthCardButton = EyeCard.lastElementChild
    selectMouthCardButton.addEventListener("click", (e) => changeCard(e))
    const selectSkinCardButton = EyeCard.childNodes[7]
    selectSkinCardButton.addEventListener("click", (e) => changeCard(e))
}

function changeCard(e) {
    let futureCard
    const card = e.target.parentNode
    card.style.display = "none"
    switch (e.target.id) {
        case "":
            futureCard = document.getElementById("select-eyes-card")
            futureCard.style.display = "block"
            break
        case "show-skin-card":
            futureCard = document.getElementById("select-skin-card")
            futureCard.style.display = "block"
            break
        case "show-mouth-card":
            futureCard = document.getElementById("select-mouth-card")
            futureCard.style.display = "block"
            break
        default:

    }
}
