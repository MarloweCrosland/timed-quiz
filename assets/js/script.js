// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//TIMER FUNCTIONALITY-------------------------------
const timeLeft = document.getElementById("timer");
let secondsLeft = 60;
//WHEN I click the start button, THEN a timer starts(The setInterval() Method)
function countdown() {
    const timerInterval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = "Time left: " + secondsLeft + " s";

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            timeLeft.textContent = "Time is up!";
            // if time is up, show on score board content instead of "all done!"
            // gameOver();
            // } else if (questionCount >= questionSource.length + 1) {
            //     clearInterval(timerInterval);
            //     gameOver();
        }
    }, 1000);
}

const questions = [
    {
        question: "What is Javascript?",
        answers: [
            { text: "A coffee shop", correct: false },
            { text: "An app for developers", correct: false },
            { text: "a programming language", correct: true },
            { text: "a coding environment", correct: false },
        ],
    },
    {
        question:
            "What special character is used to end Javascript code lines?",
        answers: [
            { text: "An exclaimation point", correct: false },
            { text: "A semicolon", correct: true },
            { text: "a forward slash", correct: false },
            { text: "a period", correct: false },
        ],
    },
    {
        question: "Which of these can be used to create a timer?",
        answers: [
            { text: "getElementbyID", correct: false },
            { text: "setInterval", correct: true },
            { text: "makeTimer", correct: false },
            { text: "setTimeout", correct: false },
        ],
    },
    {
        question: "Javascript has a shorthand version which is called...",
        answers: [
            { text: "jquery", correct: true },
            { text: "jtrunc", correct: false },
            { text: "jquick", correct: false },
            { text: "jdot", correct: false },
        ],
    },
    {
        question: "Is javascript used for front end dev, back end, or both?",
        answers: [
            { text: "front end only", correct: false },
            { text: "neither front nor back end", correct: false },
            { text: "back end only", correct: false },
            { text: "both front and back end", correct: true },
        ],
    },
];

const answerButtonsElement = document.getElementById("answer-buttons-element");
const startButton = document.getElementById("start-button");
const questionContainer = document.getElementById("question-container");

let currentQuestionIndex = 0;
//start button functionality:
//hides start button and sets next question.
startButton.addEventListener("click", function startGame() {
    console.log("started");
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    setNextQuestion();
});

const questionPrompt = document.getElementById("question-prompt");

function setNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        //clear buttons first
        resetState();
        showQuestion(questions[currentQuestionIndex]);
    } else {
        gameOver();
    }
}

function gameOver() {
  console.log('game is over');
  
}

function resetState() {
    //while a child exists in answer buttons, remove it
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function showQuestion(question) {
    //show answer text and create buttons for each answer
    questionPrompt.textContent = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        // if answer is correct add correct answer attribute
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        //when button is clicked, select it as answer
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e, currentScore) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    if (!selectedButton.correct) {
        //if the answer selected is wrong subtract 5 seconds
        secondsLeft = secondsLeft - 5;
        currentQuestionIndex++;
        setNextQuestion();
    } else {
        //if the answer selected is right, add 100 points to score
        currentQuestionIndex++;
        setNextQuestion();
    }
}

countdown();
