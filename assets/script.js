var questions = [
    {
        prompt: "What does the acronym DOM stand for?", 
        answers: ["DOMinoes", "Document Object Matrix", "Dogs Object More", "Document Object Model"],
        correct: "Document Object Model"
    },
    {
        prompt: "Question 2?", 
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 4"
    },
    {
        prompt: "Question 3", 
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 3"
    },
    {
        prompt: "Question 4", 
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 2"
    },
    {
        prompt: "Question 5", 
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 1"
    },
    {
        prompt: "Question 6", 
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: "Answer 4"
    }

];


//Variables to references DOM elements
var startBox = document.getElementById("start-box");
var startButton = document.getElementById("start-button");
var timeRemaining = document.getElementById("time");
var questionBox = document.getElementById("question-box");
var timerBox = document.getElementById("timer-box");

//Variable to keep track of the quiz score/timer and current question
var time = 61;




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

}

//Event listener for the start button
startButton.addEventListener("click", startQuiz)