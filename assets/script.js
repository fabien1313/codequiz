var startContainer = document.getElementById('container-0');
var questionOne = document.getElementById('container-1');
var questionTwo = document.getElementById('container-2');
var questionThree = document.getElementById('container-3');
var questionFour = document.getElementById('container-4');
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
answrOne.addEventListener('click', highScore)
answrTwo.addEventListener('click', highScore)
answrThree.addEventListener('click', highScore)
answrFour.addEventListener('click', highScore)


function startGame() {
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

function fourthQuestion () {
    if (answOne || answTwo || answThree || answFour) {
        questionThree.classList.add('hide')
        questionFour.classList.remove('hide')
    }

}

function highScore () {
    if (answrOne || answrTwo || answrThree || answrFour) {
       console.log('highscore screen');
    }

}