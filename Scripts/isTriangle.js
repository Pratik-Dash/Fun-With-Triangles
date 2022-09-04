const angles = document.querySelectorAll(".angles");
const checkButton = document.querySelector(".check-button");
const output = document.querySelector(".output")

checkButton.addEventListener("click",()=>{

    var angle1 = Number(angles[0].value)
    var angle2 = Number(angles[1].value)
    var angle3 = Number(angles[2].value)
    if(angle1 >0 && angle2 > 0 && angle3 >0){
    var sum = getSum(angle1,angle2,angle3);

    if(sum==180){
        output.innerText = "Yaaayy! your angles form a Triangle."
        output.className = "success"
    }else{
       
        output.innerText = "Uh Oh! your angles do not form a Triangle."
        output.className = "wrong"
    }
}
else{
    output.innerText = "Angles cannot be negative or zero."
    output.className = "wrong"
}
})

function getSum(angle1,angle2,angle3)
{
    
    const sum = angle1+angle2+angle3;
    return sum;
    }
    