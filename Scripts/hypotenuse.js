const sides = document.querySelectorAll(".sides");
const button = document.querySelector(".calculate-hypo");
const output = document.querySelector(".output");

button.addEventListener("click",()=>{

    var side1 = Number(sides[0].value)
    var side2 = Number(sides[1].value)
    if(side1>0 && side2>0){

    var hypotenuse = calculateHypotenuse(side1,side2)
    output.innerText = "The length of the hypotenuse is "+hypotenuse+"cm."
    output.className = "success"
    }else{
        output.innerText = "Sides cannot be zero or negative."
        output.className = "wrong"
    }
})

function calculateHypotenuse(side1,side2)
{
    var hypotenuse = Math.sqrt(side1*side1+side2*side2).toFixed(2);
    return hypotenuse
}