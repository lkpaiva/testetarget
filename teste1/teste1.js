var numA = 0;
var numB = 1;
var numC = 0;
let fibonacci = "";

fibonacci += numA + " " + numB;

for(let index = 1; index <= 21; index++) {
    numC = numA + numB;
    fibonacci += " " + numC;
    numA = numB;
    numB = numC;
}

console.log("Sequência de Fibonacci (primeiros 12 números):", fibonacci);

let numeroParaVerificar = 7; 
numA = 0;
numB = 1;
numC = 0;
let pertenceAFibonacci = false;

if (numeroParaVerificar === numA || numeroParaVerificar === numB) {
    pertenceAFibonacci = true;
} else {
    while (numC < numeroParaVerificar) {
        numC = numA + numB;
        numA = numB;
        numB = numC;
        
        if (numC === numeroParaVerificar) {
            pertenceAFibonacci = true;
            break;
        }
    }
}

if (pertenceAFibonacci) {
    console.log(numeroParaVerificar + " pertence à sequência de Fibonacci.");
} else {
    console.log(numeroParaVerificar + " não pertence à sequência de Fibonacci.");
}
