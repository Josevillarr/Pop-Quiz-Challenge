var questions = [
    {
        question: "What does the acronym DOM stand for?", 
        answers: [
            { text: "DOMinoes", correct: false },
            { text: "Document Object Matrix", correct: false },
            { text: "Dogs Object More", correct: false },
            { text: "Document Object Model", correct: true}
        ],
    },
    {
        question: "Question 2?", 
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 4"
    },
    {
        question: "Question 3", 
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 3"
    },
    {
        question: "Question 4", 
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 2"
    },
    {
        question: "Question 5", 
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1"
    },
    {
        question: "Question 6", 
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 4"
    }

];

let questionElement = document.getElementById("questions");

//Variables to references DOM elements
var startBox = document.getElementById("start-box");
var startButton = document.getElementById("start-button");
var timeRemaining = document.getElementById("time");
let questionBox = document.getElementById("question-box");
var timerBox = document.getElementById("timer-box");
var question = document.getElementById("questions");

//Variable to keep track of the quiz score/timer and current question
var time = 60;
var score = 0;




//Function to start the quiz
function startQuiz() {
    //Hide start box and reveal the timer
    startBox.classList.add("hide");
    timerBox.classList.remove("hide");

    
    //Start the timer
    startTimer();
    printQuestion();
}

function startTimer() {
    
    time--;
    timeRemaining.innerText = time
    setInterval(startTimer, 1000);
    
}

function printQuestion() {
    
    questionBox.classList.remove("hide"); 
        
    for (var i = 0; i < questions.length; i++) {

    }

    


}

//Event listener for the start button
startButton.addEventListener("click", startQuiz)