function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];
for (let i = 0 ; i < 25 ; i++){
array.push(getRandom(1,100));
}

console.log(array);