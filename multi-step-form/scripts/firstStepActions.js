import {user} from "./script.js";

export function checkFirstStepFields() {
    return (user.email !== "" && user.first_name !== "")
}

function checkName(name) {
    return name.length <= 3;
}

function checkAlertName(e) {
    const alert = document.getElementById("first_name_error")
    if (checkName(e.target.value)) {
        user.first_name = ""
        alert.style.display = "block"
    } else {
        user.first_name = e.target.value
        alert.style.display = "none"
    }
}

function checkAlertEmail(e) {
    const alert = document.getElementById("email_error")
    if (checkEmail(e.target.value)) {
        user.email = e.target.value
        alert.style.display = "none"
    } else {
        user.email = ""
        alert.style.display = "block"
    }
}

function checkEmail(email) {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return regex.test(email)
}

export function addFirstStepInputsActions() {
    const nameInput = document.getElementById("first_name")
    nameInput.addEventListener("input", checkAlertName)
    const emailInput = document.getElementById("email")
    emailInput.addEventListener("input", checkAlertEmail)
    const lastNameInput = document.getElementById("last_name")
    lastNameInput.addEventListener("input", (e) => {
        user.second_name = e.target.value
    })
}