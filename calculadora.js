const process = require("process");


const sumar = require("./sumar");
const restar = require("./restar");
const multiplicar = require("./multiplicar");
const dividir = require("./dividir");



/* console.log(sumar(6,4));
console.log(restar(10,5));
console.log(multiplicar(2,0));
console.log(dividir(20,0)); */

const operacion = process.argv[2];
const num1 = +process.argv[3];
const num2 = +process.argv[4];

if (operacion === "sumar") {
    console.log(sumar(num1,num2))
} else if (operacion === "restar") {
    console.log(restar(num1,num2))
} else if (operacion === "multiplicar") {
    console.log(multiplicar(num1,num2))
} else if (operacion === "dividir") {
    console.log(dividir(num1,num2))
}
