const questions = [
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            { text: "var colors = 'red', 'green', 'blue'", correct: false },
            { text: "var colors = (1:'red', 2:'green', 3:'blue')", correct: false },
            { text: "var colors = ['red', 'green', 'blue']", correct: true },
            { text: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", correct: false }
        ]
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            { text: "msg('Hello World')", correct: false },
            { text: "alertBox('Hello World')", correct: false },
            { text: "msgBox('Hello World')", correct: false },
            { text: "alert('Hello World')", correct: true }
        ]
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            { text: "if i == 5 then", correct: false },
            { text: "if (i == 5)", correct: true },
            { text: "if i = 5 then", correct: false },
            { text: "if i = 5", correct: false }
        ]
    },
    {
        question: "How can you add a comment in JavaScript?",
        answers: [
            { text: "'This is a comment", correct: false },
            { text: "//This is a comment", correct: true },
            { text: "<!--This is a comment-->", correct: false },
            { text: "/*This is a comment*/", correct: true }
        ]
    },
    {
        question: "What is the correct way to write a JavaScript object?",
        answers: [
            { text: "var person = {firstName:'John', lastName:'Doe'}", correct: true },
            { text: "var person = (firstName:'John', lastName:'Doe')", correct: false },
            { text: "var person = (firstName='John', lastName='Doe')", correct: false },
            { text: "var person = {firstName='John', lastName='Doe'}", correct: false }
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            { text: "onmouseclick", correct: false },
            { text: "onchange", correct: false },
            { text: "onclick", correct: true },
            { text: "onmouseover", correct: false }
        ]
    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: [
            { text: "variable carName", correct: false },
            { text: "var carName", correct: true },
            { text: "v carName", correct: false },
            { text: "carName", correct: false }
        ]
    },
    {
        question: "What will the following code return: Boolean(10 > 9)?",
        answers: [
            { text: "false", correct: false },
            { text: "NaN", correct: false },
            { text: "true", correct: true },
            { text: "undefined", correct: false }
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { text: "*", correct: false },
            { text: "=", correct: true },
            { text: "-", correct: false },
            { text: "x", correct: false }
        ]
    },
    {
        question: "What is the output of the following code: console.log(typeof 'Hello World');?",
        answers: [
            { text: "string", correct: true },
            { text: "object", correct: false },
            { text: "undefined", correct: false },
            { text: "boolean", correct: false }
        ]
    }
];

const questionDisplay = document.querySelector(".question");
const answerButtons = document.querySelectorAll(".answersBtn");
const nextBtn = document.querySelector(".nextBtn");

let questionIndex = 0;
let score = 0;

function showQuestion() {
    let currentQuestion = questions[questionIndex];
    let questionNumber = questionIndex + 1;
    questionDisplay.textContent = `${questionNumber}. ${currentQuestion.question}`;

    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index].text;
        button.onclick = () => selectAnswer(currentQuestion.answers[index], button);
        button.disabled = false;
        button.style.backgroundColor = ""; 
    });
}

function selectAnswer(answer, button) {
    if (answer.correct) {
        score++;
        button.style.backgroundColor = "#0080003a";
    } else {
        button.style.backgroundColor = "#ff00002e";
    }
    answerButtons.forEach((btn, index) => {
        if (questions[questionIndex].answers[index].correct) {
            btn.style.backgroundColor = "#0080003a";
        }
        btn.disabled = true;
    });
}

nextBtn.addEventListener("click", () => {
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionDisplay.textContent = `Your Score is ${score} out of ${questions.length}!!`;
    answerButtons.forEach(button => button.style.display = "none");
    nextBtn.textContent = "Try Again";
    nextBtn.onclick = resetQuiz;
}

function resetQuiz() {
    questionIndex = 0;
    score = 0;
    answerButtons.forEach(button => {
        button.style.display = "block";
        button.style.backgroundColor = ""; 
        button.disabled = false;
    });
    nextBtn.textContent = "Next";
    nextBtn.onclick = () => {
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    };
    showQuestion(); 
}

showQuestion();
