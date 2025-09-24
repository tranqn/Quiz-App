const questionRef = document.getElementById('question');
const answer1Ref = document.getElementById('answer_1');
const answer2Ref = document.getElementById('answer_2');
const answer3Ref = document.getElementById('answer_3');
const answer4Ref = document.getElementById('answer_4');
const questionStart = document.getElementById('start-question');
const questionLast = document.getElementById('last-question');
const endScreenRef = document.getElementById('end-screen');
const startScreenRef = document.getElementById('start-screen');
const scoreRef = document.getElementById('score');
const amountQuestionsRef = document.getElementById('amount-questions');
const progressBarRef = document.getElementById('progress-bar');
let currentQuestion = 0;
let rightAnswers = 0; 
let percent = 0; 

function init(){
    // for(let index = 0; index < questions.length; index++){
    //     renderQuestion(index);
    // }
    questionLast.innerHTML = questions.length;
    renderQuestion(currentQuestion);
}

function renderQuestion(arrayIndex){
    if(currentQuestion >= questions.length){
        endScreenRef.style ='';
        startScreenRef.style = 'display:none'
        scoreRef.innerHTML = rightAnswers;
        amountQuestionsRef.innerHTML = questions.length;
    } else{
        questionRef.innerHTML = questions[arrayIndex].question;
        answer1Ref.innerHTML = questions[arrayIndex].answer_1;
        answer2Ref.innerHTML = questions[arrayIndex].answer_2;
        answer3Ref.innerHTML = questions[arrayIndex].answer_3;
        answer4Ref.innerHTML = questions[arrayIndex].answer_4;
        renderFooter(arrayIndex+1);
        percent = currentQuestion / questions.length;
        percent = Math.round(percent*100);
        progressBarRef.innerHTML = `${percent}%`;
        progressBarRef.style = `width: ${percent}%`;
    }

}

function renderFooter(index){
    questionStart.innerHTML = index;
}

function answer(answer){
    if(answer == questions[currentQuestion].right_answer){
        document.getElementById(`answer_${answer}`).classList.add('bg-success');
        rightAnswers++;
    } else{
        // for(let i = 1; i < 5; i++){
        //     if(i == answer){
        //         continue;
        //     } else{
        //         document.getElementById(`answer_${answer}`).classList.add('bg-danger');
        //     }
        // }
        document.getElementById(`answer_${answer}`).classList.add('bg-danger');
        document.getElementById(`answer_${questions[currentQuestion].right_answer}`).classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;

}

function nextQuestion(){
    resetQuestion();
    currentQuestion++;
    renderQuestion(currentQuestion);
}

function resetQuestion(){
    document.getElementById('next-button').disabled = true;
    document.getElementById(`answer_1`).classList.remove('bg-danger');
    document.getElementById(`answer_2`).classList.remove('bg-danger');
    document.getElementById(`answer_1`).classList.remove('bg-success');
    document.getElementById(`answer_2`).classList.remove('bg-success');
    document.getElementById(`answer_3`).classList.remove('bg-danger');
    document.getElementById(`answer_3`).classList.remove('bg-success');
    document.getElementById(`answer_4`).classList.remove('bg-danger');
    document.getElementById(`answer_4`).classList.remove('bg-success');
}

function restartGame(){
    currentQuestion = 0;
    rightAnswers = 0;
    endScreenRef.style = 'display:none'
    startScreenRef.style.display = '';
    init();
}