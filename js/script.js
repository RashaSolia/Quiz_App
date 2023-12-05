// // https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple   



import { Quiz } from "./quiz.js";
import {Question} from "./Questions.js"



const categoryMenu =document.getElementById('categoryMenu')
const difficultyOptions =document.getElementById('difficultyOptions')
const questionsNumber =document.getElementById('questionsNumber')
const startBtn =document.getElementById('startQuiz')
const quizForm=document.getElementById('quizForm')
export const questionsContainer=document.querySelector('.questions-container')
export let questions;
export let quiz
startBtn.addEventListener('click' , async function () {  
    const category = categoryMenu.value;
    const difficulty = difficultyOptions.value;
    const amount = questionsNumber.value;

    quiz = new Quiz(category , difficulty , amount)
    // console.log(quiz);
 questions= await quiz.getQuestions()
// console.log(questions)
let question1=new Question(0)
// console.log(question1)
quizForm.classList.replace('d-flex','d-none')
question1.displayQuestions()
})