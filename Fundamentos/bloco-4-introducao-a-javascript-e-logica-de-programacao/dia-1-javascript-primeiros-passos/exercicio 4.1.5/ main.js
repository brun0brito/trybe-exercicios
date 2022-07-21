/* 🚀 Faça um programa que defina três constantes com 
os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de 
um triângulo e false, caso contrário. Se algum ângulo 
for inválido o programa deve retornar uma mensagem de 
erro. */

const angulo1 = 1;
const angulo2 = 60;
const angulo3 = 60;
let somaTriangulo = angulo1 + angulo2 + angulo3;

if (somaTriangulo === 180){
  console.log(true)
} else if (angulo1 == 0 || angulo2 == 0 || angulo3 == 0){
  console.log("Angulo inválido")
} else{
  console.log (false)
}
