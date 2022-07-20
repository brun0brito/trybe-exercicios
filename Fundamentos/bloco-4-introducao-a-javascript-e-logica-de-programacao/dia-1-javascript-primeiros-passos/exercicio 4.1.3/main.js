/* Faça um programa que retorne o maior de três números.
Defina no começo do programa três constantes com os valores que serão comparados. */

const n1 = 10;
const n2 = 60;
const n3 = 30;
let resultado = n1

if (n2 > n1){
  resultado = n2;
}

if (n3 > n2){
  resultado = n3;
}

console.log("O número: " +resultado+" é o maior")