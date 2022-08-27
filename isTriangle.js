const angles = document.querySelectorAll(".angles");
const checkButton = document.querySelector(".check-button");
const output = document.querySelector(".output")

checkButton.addEventListener("click",()=>{

    var sum = getSum(Number(angles[0].value),Number(angles[1].value),Number(angles[2].value));

    if(sum==180){
        output.innerText = "Yaaayy! your angles form a Triangle."
    }else{
       
        output.innerText = "Uh Oh! your angles do not form a Triangle."
    }
})

function getSum(angle1,angle2,angle3)
{
    const sum = angle1+angle2+angle3;
    return sum;
}