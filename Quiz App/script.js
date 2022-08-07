const quizData = [
    {
        question: "What is the official colour of Ashoka Chakra on Indian National Flag?",
        a: "Blue",
        b: "Saffron",
        c: "Navy Blue",
        d: "Green",
        correct: "c",
    },
    {
        question: "What is size (width to length) ratio of Indian National Flag?",
        a: "3 : 6",
        b: "2 : 3",
        c: "2 : 4",
        d: "2 : 2",
        correct: "b",
    },
    {
        question: "What is the preferred fabric for weaving the Indian Tricolor Flag?",
        a: "Polyster",
        b: "Khadi",
        c: "Cotton",
        d: "Jute",
        correct: "b",
    },
    {
        question: "The design and manufacturing process for the national flag is regulated by:",
        a: "Bureau of Indian Standards",
        b: "Khadi Gram Udyog, India",
        c: "Parliament of India",
        d: "Flag foundation of India",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})