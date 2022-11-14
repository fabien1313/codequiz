var startContainer = document.getElementById('container-0');
var questionOne = document.getElementById('container-1');
var questionTwo = document.getElementById('container-2');
var questionThree = document.getElementById('container-3');
var questionFour = document.getElementById('container-4');
var questionFive = document.getElementById('container-5');
var timerText = document.getElementById('timer');
var startBtn = document.getElementById('start-btn');
var nextBtn = document.getElementById('next-btn');
var answerOne = document.getElementById('qOne');
var answerTwo = document.getElementById('qTwo');
var answerThree = document.getElementById('qThree');
var answerFour = document.getElementById('qFour');
var ansOne = document.getElementById('quOne');
var ansTwo = document.getElementById('quTwo');
var ansThree = document.getElementById('quThree');
var ansFour = document.getElementById('quFour');
var answOne = document.getElementById('queOne');
var answTwo = document.getElementById('queTwo');
var answThree = document.getElementById('queThree');
var answFour = document.getElementById('queFour');
var answrOne = document.getElementById('quesOne');
var answrTwo = document.getElementById('quesTwo');
var answrThree = document.getElementById('quesThree');
var answrFour = document.getElementById('quesFour');
var aOne = document.getElementById('questOne');
var aTwo = document.getElementById('questTwo');
var aThree = document.getElementById('questThree');
var aFour = document.getElementById('questFour');






function countDown() {
    var timeLeft = 30;
  
    var timeInterval = setInterval(function(){
      if ( timeLeft > 1) {
        timerText.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      }else if (timeLeft === 1) {
        timerText.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else {
        timerText.textContent = 'Timer';
        clearInterval(timeInterval);
      }
    }, 1000);
  }


function startGame() {
    countDown()
    startContainer.classList.add('hide')
    questionOne.classList.remove('hide')

}

function secondQuestion() {
    if (answerOne || answerTwo || answerThree || answerFour) {
        questionOne.classList.add('hide')
        questionTwo.classList.remove('hide')
    }
}

function thirdQuestion() {
    if (ansOne || ansTwo || ansThree || ansFour) {
        questionTwo.classList.add('hide')
        questionThree.classList.remove('hide')
    }

}

function fourthQuestion() {
    if (answOne || answTwo || answThree || answFour) {
        questionThree.classList.add('hide')
        questionFour.classList.remove('hide')
    }

}

function fifthQuestion() {
    if (answOne || answTwo || answThree || answFour) {
        questionFour.classList.add('hide')
        questionFive.classList.remove('hide')
    }

}

function highScore() {
    if (aOne || aTwo || aThree || aFour) {
        console.log("Here is your highscore page");
    }

}














startBtn.addEventListener('click', startGame)
answerOne.addEventListener('click', secondQuestion)
answerTwo.addEventListener('click', secondQuestion)
answerThree.addEventListener('click', secondQuestion)
answerFour.addEventListener('click', secondQuestion)
ansOne.addEventListener('click', thirdQuestion)
ansTwo.addEventListener('click', thirdQuestion)
ansThree.addEventListener('click', thirdQuestion)
ansFour.addEventListener('click', thirdQuestion)
answOne.addEventListener('click', fourthQuestion)
answTwo.addEventListener('click', fourthQuestion)
answThree.addEventListener('click', fourthQuestion)
answFour.addEventListener('click', fourthQuestion)
answrOne.addEventListener('click', fifthQuestion)
answrTwo.addEventListener('click', fifthQuestion)
answrThree.addEventListener('click', fifthQuestion)
answrFour.addEventListener('click', fifthQuestion)
aOne.addEventListener('click', highScore)
aTwo.addEventListener('click', highScore)
aThree.addEventListener('click', highScore)
aFour.addEventListener('click', highScore)