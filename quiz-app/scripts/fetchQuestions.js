
const questionsAPI = 'https://5d76bf96515d1a0014085cf9.mockapi.io/quiz';
export async function fetchQuestions() {
    const questions = []
    const response = await fetch(questionsAPI)
    if (response.ok) {
        const data = await response.json()
        for (let question of data) {
            questions.push({id: question.id, answer: question.answer})
        }
        return questions
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}