import {fetchQuestions} from "./fetchQuestions.js";

const questions = []
const correctQuestions = []
const form = document.forms.quizForm

function changeModalCounter() {
    const modalCounter = document.getElementById("my-modal")
    const span = modalCounter.getElementsByTagName("span")[0]
    let number = correctQuestions.filter(question => question).length
    span.innerText = `${number}/5`
}

function changeCounter() {
    const counter = document.getElementById("aside-counter")
    const span = counter.getElementsByTagName("span")[0]
    let number = correctQuestions.filter(question => question).length
    span.innerText = `${number}/5`
}

function changeNumberCorrectAnswers() {
    changeCounter()
    changeModalCounter()
}

function paintAnswers(answerId, correctId, section) {
    const questionId = [...section.parentNode.children].findIndex((elem)=> elem === section)
    section.children[correctId].style.backgroundColor = "green"
    if (answerId !== correctId) {
        section.children[answerId].style.backgroundColor = "red"
        correctQuestions[questionId] = false
    } else {
        correctQuestions[questionId] = true
    }
    changeNumberCorrectAnswers()
}

function clearBackgroundAllAnswers(section) {
    const answersDivs = section.getElementsByTagName("div")
    for (let div of answersDivs) {
        div.style.backgroundColor = "transparent"
    }
}

function checkAnswer(e, questionId) {
    const section = e.target.parentNode.parentNode.parentNode
    clearBackgroundAllAnswers(section)
    const answerId = Number(e.target.value)
    const correctId = questions.find(question => question.id === questionId + 1).answer
    paintAnswers(answerId, correctId, section)
}

function addModalActions() {
    document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
        event._isClickWithInModal = true;
    });
    document.getElementById("my-modal").addEventListener('click', event => {
        if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove('open');
    });
}

function changeDomElements() {
    let sectionIdx = 0
    for (let section of form.children) {
        if (sectionIdx === form.children.length - 1) {
            continue
        }
        let currentId = sectionIdx
        correctQuestions.push(false)
        const inputs = section.getElementsByTagName("input")
        for (let input of inputs) {
            input.addEventListener("click", (e) => checkAnswer(e, currentId))
        }
        sectionIdx += 1
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("my-modal").classList.add("open")
    })
    addModalActions()
}

fetchQuestions().then((response) => {
    if (response.ok) {
        response.json().then(data => {
            for (let question of data) {
                questions.push({id: question.id, answer: question.answer})
            }
        })
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
    changeDomElements()
})