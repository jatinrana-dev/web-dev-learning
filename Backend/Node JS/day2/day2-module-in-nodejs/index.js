const sum = function(a,b){
    return a+b;
}

const sub = (x,y) =>{
    return x-y;
}
function mul (s,f){
    return s*f;
}
// COMMON JS
// module.exports = {
//     sum,
// }


// ES6
export default sum;
export {
    sub,
    mul
}