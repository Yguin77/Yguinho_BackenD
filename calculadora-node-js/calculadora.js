let  prompt = require ("prompt-sync")()

// Função para somar dois números
function somar(a, b) {
    return a + b;
}
console.log(somar(9, 3))

// Função para subtrair b de a
function subtrair(a, b) {
    return a - b;
}
console.log(subtrair(5, 4))

// Função para multiplicar dois números
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(7, 4))

// Função para dividir a por b
function dividir(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
}
console.log(dividir(5, 3))

// Função para elevar a um número ao quadrado
function aoQuadrado(a) {
    return a * a;
}

console.log(aoQuadrado(5))

// Função para calcular a raiz quadrada de um número
function raizQuadrada(a) {
    if (a < 0) {
        throw new Error("Raiz quadrada de número negativo não é permitida.");
    }
    return Math.sqrt(a);
}
console.log(raizQuadrada(30))

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    aoQuadrado,
    raizQuadrada,
 }