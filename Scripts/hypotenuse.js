const sides = document.querySelectorAll(".sides");
const button = document.querySelector(".calculate-hypo");
const output = document.querySelector(".output");

button.addEventListener("click",()=>{

    var hypotenuse = calculateHypotenuse(Number(sides[0].value),Number(sides[1].value))
    output.innerText = "The length of the hypotenuse is "+hypotenuse+"."
    output.className = "success"
})

function calculateHypotenuse(side1,side2)
{
    var hypotenuse = Math.sqrt(side1*side1+side2*side2).toPrecision(3);
    return hypotenuse
}