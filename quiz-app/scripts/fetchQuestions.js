const questionsAPI = 'https://5d76bf96515d1a0014085cf9.mockapi.io/quiz';

export async function fetchQuestions() {
    return await fetch(questionsAPI)
}