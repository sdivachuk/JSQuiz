var state = 'start';

var startPage = document.querySelector("#start");
var quizPage = document.querySelector("#quiz");
var endPage = document.querySelector("#end");
var startButton = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz #title");

function displayState() {
  if (state === 'start') {
    startPage.style.display = 'block';
    quizPage.style.display = 'none';
    endPage.style.display = 'none';
  }
  if (state === 'quiz') {
    startPage.style.display = 'none';
    quizPage.style.display = 'block';
    endPage.style.display = 'none';
  }
  if (state === 'end') {
    startPage.style.display = 'none';
    quizPage.style.display = 'none';
    endPage.style.display = 'block';
  }
}

function init() {
  displayState();
}

startButton.addEventListener("click", function() {
  state = 'quiz';
  displayState();
});

quizTitle.addEventListener("click", function () {
  state = 'end';
  displayState();
});

init();