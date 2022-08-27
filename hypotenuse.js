const sides = document.querySelectorAll(".sides");
const button = document.querySelector(".calculate");
const output = document.querySelector(".output");

button.addEventListener("click",()=>{

    var hypotenuse = calculateHypotenuse(Number(sides[0].value),Number(sides[1].value))
    output.innerText = "The lenght of the hypotenuse is "+hypotenuse+"."
})

function calculateHypotenuse(side1,side2)
{
    var hypotenuse = Math.sqrt(side1*side1+side2*side2).toPrecision(3);
    return hypotenuse
}