import {user} from "./script.js";

export function checkThirdStepFields() {
    return user.message !== "" && user.study_program !== ""
}

function checkStudyProgram(program) {
    for (let enumProgram of Object.keys(studyProgram)) {
        if (program === studyProgram[enumProgram]) {
            user.study_program = program
        }
    }
    const alert = document.getElementById("select_program_error")
    if (user.study_program === studyProgram.empty) {
        alert.style.display = "block"
    } else {
        alert.style.display = "none"
    }
}

function checkMessage(message) {
    user.message = message
    const alert = document.getElementById("message_error")
    if (user.message === "") {
        alert.style.display = "block"
    } else {
        alert.style.display = "none"
    }
}

const studyProgram = {
    reactDeveloper: "React Developer",
    angularDeveloper: "Angular Developer",
    pythonDeveloper: "Python Developer",
    empty: ""
}

export function addThirdStepInputsActions() {
    const select = document.getElementById("select_program")
    select.addEventListener("change", (e) => {
        checkStudyProgram(e.target.value)
    })
    const messageInput = document.getElementById("message")
    messageInput.addEventListener("input", (e) => {
        checkMessage(e.target.value)
    })
}
