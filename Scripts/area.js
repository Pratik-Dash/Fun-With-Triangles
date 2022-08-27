const inputs = document.querySelectorAll(".dimensions");
const button = document.querySelector(".calculate");
const output = document.querySelector(".output");

button.addEventListener("click",()=>{

    var area = calaculateArea(Number(inputs[0].value),Number(inputs[1].value));
    output.innerText = "The area of your triangle is "+area+"."
    output.className = "success"
})

function calaculateArea(base,height)
{
        var area = 1/2 * (base * height);
        return area
}