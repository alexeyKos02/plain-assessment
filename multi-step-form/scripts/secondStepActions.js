import {user} from "./script.js";

export function checkSecondStepFields() {
    return (user.mobile !== "" && user.country !== "")
}

export function addSecondStepInputsActions() {
    const mobileInput = document.getElementById("contact")
    mobileInput.addEventListener("input", (e) => {
        user.mobile = e.target.value
    })
    const cityInput = document.getElementById("city")
    cityInput.addEventListener("input", (e) => {
        user.city = e.target.value
    })
    const countryInput = document.getElementById("country")
    countryInput.addEventListener("input", (e) => {
        user.country = e.target.value
    })
}
