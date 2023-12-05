import { questions, questionsContainer, quiz } from "./script.js"
export class Question {

 constructor(index){
    this.index=index
this.Question =questions[index].question
this.category =questions[index].category
this.correctAns =questions[index].correct_answer
this.incorrectAns =questions[index].incorrect_answers
this.allAnswer = this.setChocices();
this.answered=false
 }

setChocices(){
    return this.incorrectAns.concat(this.correctAns).sort()
}


displayQuestions(){
    const cartonaa=` <div
    class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3 animate__animated animate__bounceIn">
    <div class="w-100 d-flex justify-content-between">
      <span class="btn btn-category">${this.category}</span>
      <span class="fs-6 btn btn-questions">${this.index + 1} of ${questions.length} Questions</span>
    </div>
    <h2 class="text-capitalize h4 text-center">${this.Question}</h2>
    <ul class="choices w-100 list-unstyled m-0 d-flex flex-wrap text-center">
      ${this.allAnswer.map((ans) => `<li>${ans}</li>`).join("")}
    </ul>
    <h2 class="text-capitalize text-center score-color h3 fw-bold"><i class="bi bi-emoji-laughing"></i> Score:
      ${quiz.score} </h2>
  </div> 
  `
  questionsContainer.innerHTML=cartonaa

  const ansBtn=document.querySelectorAll('ul li')
 for(let i=0 ;i< ansBtn.length;i++){
    ansBtn[i].addEventListener('click',(e)=>{
        // console.log(e.target)
       this.checkAns(e)
    })
 }
}

checkAns(e){
    if(this.answered==false){
        this.answered = true
        if(e.target.innerHTML==this.correctAns){
            quiz.score ++;
            // console.log(quiz.score)
            e.target.classList.add('correct', 'animate__animated', 'animate__flash')
        }
        else {
            e.target.classList.add('wrong', 'animate__animated', 'animate__shakeX')
        }
        }
        this.anaimteQuestion(e.target,500)

    }

anaimteQuestion(elem,duration){
      
setTimeout(() => {
    elem.closest('.question').classList.replace('animate__bounceIn','animate__backOutLeft')
}, duration);
setTimeout(() => {
    this.nextQuestion()
}, duration*2);

}

nextQuestion(){
    this.index ++;
    if(this.index > questions.length-1){
        questionsContainer.innerHTML= quiz.endQuiz()
        const againbtn=document.querySelector('.again')
        againbtn.addEventListener('click',function(){
            location.reload()
        })
return
    }
    const newQuestion=new Question(this.index)
    // console.log(newQuestion)

    newQuestion.displayQuestions()
}



}