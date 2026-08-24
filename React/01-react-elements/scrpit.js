let h1 = document.createElement("h1")
h1.textContent = "hello";
document.body.append(h1)
let rh1 = React.createElement(
    "div",
    null,
    React.createElement(
        "span",
        null,
        React.createElement(
            "h1",
            null,
            "i am under h1"

        )

    )

)
let elem = document.querySelector("#root")
let rootOfReact = ReactDOM.createRoot(elem);

rootOfReact.render(rh1);




console.log("real dom >>", h1)
console.log("virtual dom>>",rh1)


import {a} from "./main.js"

console.log(a)