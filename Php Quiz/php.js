document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "Which symbol is used to declare a variable in PHP?",
            a: "$",
            b: "&",
            c: "#",
            d: "@",
            correct: "a",
        },
        {
            question: "How do you start a PHP block of code?",
            a: "<?php",
            b: "<php>",
            c: "<script>",
            d: "<?code>",
            correct: "a",
        },
        {
            question: "Which function is used to output text in PHP?",
            a: "echo",
            b: "print",
            c: "printf",
            d: "All of the above",
            correct: "d",
        },
        {
            question: "How do you comment a single line in PHP?",
            a: "// This is a comment",
            b: "# This is a comment",
            c: "/* This is a comment */",
            d: "Both a and b",
            correct: "d",
        },
        {
            question: "What is the correct way to create a PHP function?",
            a: "function myFunction() { }",
            b: "create function myFunction() { }",
            c: "function: myFunction() { }",
            d: "func myFunction() { }",
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

    loadQuiz(); 
});
