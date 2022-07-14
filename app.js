'use strict';

// quiz data

const quizQuestions=[{
    question:"The binary coded Decimal (BCD) uses?",
    A:'6bits',
    B:'8 bits',
    C: '16bits',
    D: '32 bits',

    answer:'A',
},

{
    question:"The two kinds of main memory are",
    A:' CDs and DVDs',
    B:'RAM and ROM',
    C: 'Primary and secondary',
    D: 'Direct and sequential',

    answer:'B',
},

{
    question:"RAM is also called as",
    A:'Virtual memory',
    B:'volatile memory',
    C: 'Non volatile memory',
    D: 'cache memory',

    answer:'B',
},

];



// read the all the element in html


const question=document.querySelector('.question-asked');

const optionA=document.getElementById('a_option');
const optionB=document.getElementById('b_option');
const optionC=document.getElementById('c_option');
const optionD=document.getElementById('d_option');

const button=document.querySelector('.btn-submit');

const quizContainer=document.querySelector('.quiz-container');


// variable that will keep track of questions and will keep updating.


let currentQuiz=0;
const lengthOfQuizData=quizQuestions.length;

console.log(lengthOfQuizData);

loadQuiz();

// loadQuiz();

function loadQuiz(){
    const currentQuizData=quizQuestions[currentQuiz];
    // console.log(currentQuizData);

    question.textContent=currentQuizData.question;
    optionA.textContent=currentQuizData.A;
    optionB.textContent=currentQuizData.B;
    optionC.textContent=currentQuizData.C;
    optionD.textContent=currentQuizData.D;

    
};


// changeQuiz question

button.addEventListener('click',()=>{

    currentQuiz++

    if(currentQuiz<=lengthOfQuizData-1){

        loadQuiz();
    }else{

        quizContainer.innerHTML=`<div class='question-done'><h1 class
        ='wait-for-answer'>Wait for the Result</h1></div>`;

    }
   
})

