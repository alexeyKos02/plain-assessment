import {checkFirstStepFields} from "./firstStepActions.js";
import {checkSecondStepFields} from "./secondStepActions.js";

const arrayButton = ["StepOneNext", "StepTwoPrevious", "StepTwoNext", "StepThreePrevious"]

export function addChangeStepsActions() {
    for (let id of arrayButton) {
        addEventChangeStepsButton(id)
    }
    const submitButton = document.getElementById("StepThreeSubmit")
    submitButton.type = "submit"
}

function changeStep(id) {
    let lastFieldset
    let currentFieldset
    switch (id) {
        case "StepOneNext":
            if (!checkFirstStepFields()) {
                return
            }
            lastFieldset = document.getElementById("StepOneContainer")
            lastFieldset.style.display = "none"
            currentFieldset = document.getElementById("StepTwoContainer")
            currentFieldset.style.display = "block"
            break
        case "StepTwoPrevious":
            lastFieldset = document.getElementById("StepTwoContainer")
            lastFieldset.style.display = "none"
            currentFieldset = document.getElementById("StepOneContainer")
            currentFieldset.style.display = "block"
            break
        case "StepTwoNext":
            if (!checkSecondStepFields()) {
                return
            }
            lastFieldset = document.getElementById("StepTwoContainer")
            lastFieldset.style.display = "none"
            currentFieldset = document.getElementById("StepThreeContainer")
            currentFieldset.style.display = "block"
            break
        case "StepThreePrevious":
            lastFieldset = document.getElementById("StepThreeContainer")
            lastFieldset.style.display = "none"
            currentFieldset = document.getElementById("StepTwoContainer")
            currentFieldset.style.display = "block"
            break
    }
}

function addEventChangeStepsButton(id) {
    const button = document.getElementById(id)
    button.addEventListener("click", (e) => {
        e.preventDefault()
        changeStep(id)
    })
}
