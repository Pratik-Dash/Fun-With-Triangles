const quizform = document.querySelector(".quiz-form")
const correctAnswers = ["90°","EquiLateral Triangle"];
const submitButton = document.querySelector(".submit")
const output = document.querySelector(".output");
const formData = new FormData(quizform);

submitButton.addEventListener("click",()=>{

    var score = calculateScore()
    
   
    output.innerText = "Thank You for atending the quiz. Your score is "+score;
   
    
    
})

function calculateScore()
{
    var index = 0;
    var score = 0;
    const formResults = new FormData(quizform);
    for(var formvalue of formResults.values()){

        if(formvalue === correctAnswers[index])
        {
            score++;
        }
        index++;
    }
    return score;
}
    

