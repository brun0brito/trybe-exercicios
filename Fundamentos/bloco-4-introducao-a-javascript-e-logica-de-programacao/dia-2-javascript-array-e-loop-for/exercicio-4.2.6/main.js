let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar;
let quantidade = 0;

for (let index = 0; index < numbers.length; index += 1){
  if( numbers[index] % 2 !== 0){
    impar = numbers[index];
    quantidade += 1;
    console.log(impar);
  }
}

if (quantidade <= 0){
  console.log('nenhum valor ímpar encontrado')
}

console.log("A quantidade de numeros ímpar foi de: " + quantidade);
