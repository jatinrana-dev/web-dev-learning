const h3 = document.querySelector("#heading")

h3.setAttribute("height","200px");
h3.setAttribute("widht","200px");

console.log(h3.getAttribute("class"));

console.log(h3.getAttribute("widht"));
h3.removeAttribute("height")

console.log(h3.hasAttribute("height")
)


console.log(h3.hasAttribute("widht")
)
// html mai camle case use nhi krte h //

const userCard = document.querySelector("#user_card")
userCard.getAttribute("data-user-id")

console.log(userCard.getAttribute("data-user-id"))

userCard.dataset.userId = "5676"
console.log(userCard.getAttribute("data-user-id"))



 const inp = document.querySelector("input");
 const btn = document.querySelector("button");


btn.addEventListener("click", ()=>{
    console.log("via input",inp.value);
    console.log("via getattribut",inp.getAttribute("value"))


})

let footer = document.createElement("footer")
console.log(footer)
let span = document.createElement("span")
console.log(span)

span.innerHTML = "hii i am <i> italic </i>"
document.body.append(footer,span)

const main = document.querySelector("main")

const box1 = document.createElement("div")
const box2 = document.createElement("div")
const box3 = document.createElement("div")

box1.classList.add("box")
box2.classList.add("box")
box2.style.backgroundColor = "red"
box3.classList.add("box")
 box3.style.backgroundColor = "blue"



main.append(box1,box2,box3)