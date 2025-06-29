const quizData = [
    {
        question: "Which symbol is used to declare a variable in C++?",
        a: "$",
        b: "&",
        c: "#",
        d: "None of the above",
        correct: "d",
    },
    {
        question: "How do you start a C++ block of code?",
        a: "#include <iostream>",
        b: "import <iostream>",
        c: "using namespace std;",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "What does the '<<' operator do in C++?",
        a: "It performs a bitwise left shift",
        b: "It outputs text to the console",
        c: "It performs a bitwise right shift",
        d: "It adds two numbers",
        correct: "b",
    },
    {
        question: "Which C++ keyword is used to define a class?",
        a: "class",
        b: "struct",
        c: "object",
        d: "define",
        correct: "a",
    },
    {
        question: "How do you declare a function in C++ that returns an integer?",
        a: "int functionName();",
        b: "functionName() -> int;",
        c: "int functionName() { }",
        d: "def functionName(): int;",
        correct: "a",
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

loadQuiz(); // Load the first quiz question when the page loads
