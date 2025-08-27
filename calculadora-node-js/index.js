let prompt = require("prompt-sync")()

let {somar, subtrair, multiplicar, dividir, aoQuadrado, raizQuadrada } = require ('./calculadora')

let a = parseFloat(prompt("Digite um numero: "))
let b = parseFloat(prompt("Digite um nuumero: "))

const calc = require ('./calculadora')

console.log(`soma: ${calc.somar(a,b)}`);
console.log(`subtrair: ${calc.subtrair(a,b)}`);
console.log(`multiplicar: ${calc.multiplicar(a,b)} `);
console.log(`dividir: ${calc.dividir(a,b)}`);
console.log(`aoQuadrado: ${calc.aoQuadrado(a,b)}`);
console.log(`raizQuadrada: ${calc.raizQuadrada(a,b)}`);


