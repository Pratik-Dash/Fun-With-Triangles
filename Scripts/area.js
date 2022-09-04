const inputs = document.querySelectorAll(".dimensions");
const button = document.querySelector(".calculate");
const output = document.querySelector(".output");

button.addEventListener("click",()=>{

    var base = Number(inputs[0].value)
    var height = Number(inputs[1].value)
    if(base > 0 && height > 0)
    {
    var area = calaculateArea(base,height);
    output.innerText = "The area of your triangle is "+area+"cm²."
    output.className = "success"
    }
    
    else{
        output.innerText = "Base and height cannot be zero or negative."
        output.className = "wrong"
    }
})

function calaculateArea(base,height)
{
        var area = 1/2 * (base * height);
        return area.toFixed(2)
}