import {addChangeStepsActions} from "./changeSteps.js";
import {addFirstStepInputsActions} from "./firstStepActions.js";
import {addSecondStepInputsActions} from "./secondStepActions.js";
import {addThirdStepInputsActions, checkThirdStepFields} from "./thirdStepActions.js";

export const user = {
    first_name: "",
    second_name: "",
    email: "",
    mobile: "",
    city: "",
    country: "",
    study_program: "",
    message: ""
}
addChangeStepsActions()
addFirstStepInputsActions()
addSecondStepInputsActions()
addThirdStepInputsActions()
const form = document.getElementById("MultiStepForm")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (!checkThirdStepFields()) {
        return
    }
    const success = document.getElementById("SuccessContainer")
    success.style.display = "block"
    const form = document.getElementById("MultiStepForm")
    form.style.display = "none"
})