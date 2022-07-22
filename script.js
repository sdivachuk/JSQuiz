var state = "start";

var startPage = document.querySelector("#start");
var quizPage = document.querySelector("#quiz");
var endPage = document.querySelector("#end");
var startButton = document.querySelector("#start button");
var quizTitle = document.querySelector("#title");
var questionIndex = 0;
var displayQ = document.querySelector("#questions");
var timerDisplay = document.querySelector("#timer");
var time = 60;
var timeState ;
var finalScore = document.querySelector("#finalScore");

var questions = [
  {
    question: "How many header tags are there?",
    choices: ["4", "5", "6", "7"],
    answer: "6",
  },
  {
    question: "What does CSS stand for?",
    choices: [
      "corresponding style sheets",
      "cascading style sheets",
      "computer secret secive",
      "coding style sheets",
    ],
    answer: "cascading style sheets",
  },
  {
    question: "what are arrays enclosed in?",
    choices: ["()", "{}", "<>", "[]"],
    answer: "<>",
  },
  {
    question: "in CSS, how do you block out code",
    choices: ["//", "/**/", "--", "!!"],
    answer: "/**/",
  },
];

function displayState() {
  if (state === "start") {
    startPage.style.display = "block";
    quizPage.style.display = "none";
    endPage.style.display = "none";
  }
  if (state === "quiz") {
    startPage.style.display = "none";
    quizPage.style.display = "block";
    endPage.style.display = "none";
  }
  if (state === "end") {
    startPage.style.display = "none";
    quizPage.style.display = "none";
    endPage.style.display = "block";
    finalScore.textContent = time;
  }
}

function init() {
  displayState();
}

startButton.addEventListener("click", function () {
  state = "quiz";
  displayState();
  displayQuestions();
  timeState = setInterval(gameTimer, 1000);
});

function gameTimer() {
    time--
    timerDisplay.textContent = time;
    if(time <= 0) {
        state = "end";
        displayState();
        clearInterval(timeState);
    }
}

function displayQuestions()  {
    var currentQuestion = questions[questionIndex];
    quizTitle.textContent = currentQuestion.question;
    displayQ.innerHTML = "";
    currentQuestion.choices.forEach(function(choice){
        var choiceBTN = document.createElement("button")
        choiceBTN.setAttribute("value", choice)
        choiceBTN.textContent = choice 

        choiceBTN.onclick = validate
        displayQ.appendChild(choiceBTN)
    })
}

function validate() {
    if(this.value === questions[questionIndex].answer) {
        console.log("correct");
    } else {
        console.log("incorrect");
        time = time-10;
        timerDisplay.textContent = time;
    }
    questionIndex++ 
    if(questionIndex === questions.length) {
        state = "end";
        displayState();
        clearInterval(timeState);
    } else {
        displayQuestions();
    }
}

function saveScore() {

}

quizTitle.addEventListener("click", function () {
  state = "end";
  displayState();
});

init();
