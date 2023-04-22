// alert("hey")
const questions=[
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Sharks",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephants",correct:false},
            {text:"Girraffe",correct:false},
        ]
    },
    {
        question:"Which was the smallest province in Kenya?",
        answers:[
            {text:"Nyanza",correct:false},
            {text:"Western",correct:false},
            {text:"Nairobi",correct:true},
            {text:"Eastern",correct:false},
        ]
    },
    {
        question:"Which was the first president of Kenya?",
        answers:[
            {text:"Kenyatta",correct:true},
            {text:"Moi",correct:false},
            {text:"Kibaki",correct:false},
            {text:"Uhuru",correct:false},
        ]
    },
    {
        question:"Which language is used for styling webpages?",
        answers:[
            {text:"SPHP",correct:false},
            {text:"JavaScript",correct:false},
            {text:"HTML",correct:false},
            {text:"CSS",correct:true},
        ]
    },
    {
        question:"Which is the smallest continent?",
        answers:[
            {text:"Asia",correct:false},
            {text:"America",correct:false},
            {text:"Australia",correct:true},
            {text:"Africa",correct:false},
        ]
    }
];

const questionEl=document.getElementById("question")
// const answersBtn=document.getElementById("answers-button")
const answersBtn = document.getElementById("answers-button");

const nextBt=document.getElementById("next-btn")

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextBt.innerHTML="Next"
    showQuestions();
}
function showQuestions(){
resetState();

    let currentQuiz=questions[currentQuestionIndex];
    let questionNumber=currentQuestionIndex+1;
    questionEl.innerHTML=questionNumber + " ." + currentQuiz.question;

    currentQuiz.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        
        answersBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    })
}
function resetState(){
    nextBt.style.display="none"
    while(answersBtn.firstChild){
        answersBtn.removeChild(answersBtn.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect= selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }
    else{
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answersBtn.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
            
        }
        button.disabled=true;
    });
    nextBt.style.display="block";
}

function showScore(){
    resetState();
    questionEl.innerHTML =  `you scored ${score} out of ${questions.length}`
    nextBt.innerHTML = "Start Quiz";
    nextBt.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestions();

    }
    else {
        showScore();
    }
}

nextBt.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();{

}
