const h1 = document.querySelector("h1");
console.dir(h1);

const a = document.querySelectorAll("h1");
console.dir(a);

const a2 = document.getElementById("heading1");
console.dir(a2);

const a3 = document.getElementsByClassName("heading2")
console.dir(a3);

const a4 = document.querySelector("#heading1");
console.dir(a4)
const a5 = document.querySelector(".heading2")
console.dir(a5)

const a6 = document.getElementsByTagName("h1");
console.dir(a6)


a4.textContent = "Good morning"
a5.textContent = "Friendss"

const box = document.querySelector(".abcd")
// box.innerHTML = "hiiiiiiie"
