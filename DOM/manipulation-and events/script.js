const body = document.body;
console.log(body.childNodes)
console.log(body.children)

const h1 = document.querySelector("h1")

h1.innerHTML = " helo guys how are u  <i> i am italic </i>"

h1.style.textAlign = "center"
h1.style.backgroundColor = "aqua"

 const h2 = document.querySelector("h2")
 h2.innerText = " weclomeee<i> i am italic </i>"

 h2.style.fontSize = "50px" 


h1.classList.replace("heading","newheading" )

 const a = h1.classList.contains("heading")
console.log(a)


const bulb = document.querySelector("#box");
console.log(bulb)
const btn = document.querySelector("button");
 
let flag = true;

btn.addEventListener("click", function (){
    if(flag){
        bulb.style.backgroundColor = "yellow";
        btn.textContent = "Off";
        flag = false;
    } else{
        bulb.style.backgroundColor = "transparent";
          btn.textContent = "On"
          ;
                  flag = true;


    }

    
}
)

const bulb2 = document.querySelector("#box2");

const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", function () {
    bulb2.classList.toggle("Lightup");
} 
)


let inp = document.querySelector("input")
let bttn = document.querySelector("#bttn")
 
bttn.addEventListener("click", () =>{
    console.log(inp.value)
}) 


let header = document.createElement("header")
console.log(header)
let span = document.createElement("span")
console.log(span)
span.textContent= ("hey i am inside the span tag")

let section = document.querySelector("section")

section.appendChild(header)
section.appendChild(span)
