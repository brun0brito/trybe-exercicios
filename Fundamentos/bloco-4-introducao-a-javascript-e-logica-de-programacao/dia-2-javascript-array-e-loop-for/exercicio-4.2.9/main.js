function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];
let divisao;

for (let i = 0 ; i < 25 ; i += 1){
array.push(getRandom(1,100));
    
}

for (let index = 0; index < array.length; index += 1){
  divisao = array[index] / 2;
  console.log(divisao);
}

