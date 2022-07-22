var state = "start";

var startPage = document.querySelector("#start");
var quizPage = document.querySelector("#quiz");
var endPage = document.querySelector("#end");
var startButton = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz #title");

var questions = [
  {
    question: "How many header tags are there?",
    choices: ["4", "5", "6", "7"],
    answer: 2,
  },
  {
    question: "What does CSS stand for?",
    choises: [
      "corresponding style sheets",
      "cascading style sheets",
      "computer secret secive",
      "coding style cheets",
    ],
    answer: 1,
  },
  {
    question: "what are arrays enclosed in?",
    choices: ["()", "{}", "<>", "[]"],
    answer: 3,
  },
  {
    question: "in CSS, how do you block out code",
    choices: ["//", "/**/", "--", "!!"],
    answer: 1,
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
  }
}

function init() {
  displayState();
}

startButton.addEventListener("click", function () {
  state = "quiz";
  displayState();
});

quizTitle.addEventListener("click", function () {
  state = "end";
  displayState();
});

init();
