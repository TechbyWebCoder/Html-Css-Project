const quizData = [
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        a: "<script name='xxx.js'>",
        b: "<script href='xxx.js'>",
        c: "<script src='xxx.js'>",
        d: "<script file='xxx.js'>",
        correct: "c",
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "alertBox('Hello World');",
        b: "msgBox('Hello World');",
        c: "alert('Hello World');",
        d: "msg('Hello World');",
        correct: "c",
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        a: "=",
        b: "-",
        c: "*",
        d: "x",
        correct: "a",
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        a: "var colors = (1:'red', 2:'green', 3:'blue')",
        b: "var colors = ['red', 'green', 'blue']",
        c: "var colors = 'red', 'green', 'blue'",
        d: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        correct: "b",
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        a: "Math.rnd(7.25)",
        b: "rnd(7.25)",
        c: "Math.round(7.25)",
        d: "round(7.25)",
        correct: "c",
    }
];

const quiz = document.getElementById('quiz')
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
