var startContainer = document.getElementById('container-0');
var questionOne = document.getElementById('container-1');
var questionTwo = document.getElementById('container-2');
var questionThree = document.getElementById('container-3');
var questionFour = document.getElementById('container-4');
var questionFive = document.getElementById('container-5');
var scorePage = document.getElementById('container-6');
var timerText = document.getElementById('timer');
var scoreText = document.getElementById('score');
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
var correct = document.querySelectorAll("correct");
var displayText = document.getElementById('here');
var btn = document.getElementById('btn');
var homeBtn = document.getElementById('home-btn');



var finalScore = [];

var score = 0;

var initialsText = document.getElementById('test').value;
var ScoreFinal = document.getElementById('score-final').value;

// var testIt = document.getElementById('test');



function countDown() {
    var timeLeft = 30;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerText.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerText.textContent = timeLeft + ' seconds remaining';
            timeLeft--;  
        } else {
            timerText.textContent = 'Timer';
            clearInterval(timeInterval);
            startContainer.classList.add('hide')
            questionOne.classList.add('hide')
            questionTwo.classList.add('hide')
            questionThree.classList.add('hide')
            questionFour.classList.add('hide')
            questionFive.classList.add('hide')
            timerText.classList.add('hide')
            scoreText.classList.add('hide')
            scorePage.classList.remove('hide') 
        }
    }, 1000);
}


function startGame() {
    countDown()
    startContainer.classList.add('hide')
    questionOne.classList.remove('hide')

}


function secondQuestion(event) {
    var target = event.target.getAttribute('data-correct');
    // var wrongTarget = event.target.getAttribute('data-incorrect');
    if (target === 'correct' ) {
        score += 20; 
    }
    
    // else {
    //     timeLeft -= 5;
        
    // }

    

    if (answerOne || answerTwo || answerThree || answerFour) {
        questionOne.classList.add('hide')
        questionTwo.classList.remove('hide')
    }

}

function thirdQuestion(event) {
    var target = event.target.getAttribute('data-correct');
    if (target === 'correct' ) {
        score += 20;
    }

    if (ansOne || ansTwo || ansThree || ansFour) {
        questionTwo.classList.add('hide')
        questionThree.classList.remove('hide')
    }

}


function fourthQuestion(event) {
    var target = event.target.getAttribute('data-correct');
    if (target === 'correct' ) {
        score += 20;
    }

    if (answOne || answTwo || answThree || answFour) {
        questionThree.classList.add('hide')
        questionFour.classList.remove('hide')
    }

}

function fifthQuestion(event) {
    var target = event.target.getAttribute('data-correct');
    if (target === 'correct' ) {
        score += 20;
    }

    if (answOne || answTwo || answThree || answFour) {
        questionFour.classList.add('hide')
        questionFive.classList.remove('hide')
    }

}

function highScore(event) {
    var target = event.target.getAttribute('data-correct');
    if (target === 'correct' ) {
        score += 20;
    }

    if (aOne || aTwo || aThree || aFour) {
        questionFive.classList.add('hide')
        timerText.classList.add('hide')
        scoreText.classList.add('hide')
        scorePage.classList.remove('hide')
    }
    
     document.getElementById('finalScore').textContent = score;
    
}


// function finalFunction () {
//     var showText = document.getElementById('placeHere');
//     var showText2 = document.getElementById('placeHere-two');

//     localStorage.getItem('test');
//     localStorage.getItem('score-final');

//     showText.textContent = initialsText;
//     showText2.textContent = ScoreFinal;

// }


btn.addEventListener('click', function(event){
    event.preventDefault();

    
    var displayed = document.getElementById('here');

    var initialsText = document.getElementById('test').value;
    var ScoreFinal = document.getElementById('score-final').value;

    localStorage.setItem('Initials', initialsText);
    localStorage.setItem('Score', ScoreFinal);

    displayed.textContent = initialsText;
    // finalFunction();

    var showText = document.getElementById('placeHere');
    var showText2 = document.getElementById('placeHere-two');

    localStorage.getItem('test');
    localStorage.getItem('score-final');

    showText.textContent = initialsText;
    showText2.textContent = ScoreFinal;
});



scoreText.addEventListener('click', function(){
    startContainer.classList.add('hide')
    questionOne.classList.add('hide')
    questionTwo.classList.add('hide')
    questionThree.classList.add('hide')
    questionFour.classList.add('hide')
    questionFive.classList.add('hide')
    timerText.classList.add('hide')
    scoreText.classList.add('hide')
    scorePage.classList.remove('hide')
});



homeBtn.addEventListener('click', function () {
    location.reload();

});





















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