function palindromo (str){
  let reversed = str.split('').reverse().join('');
  return str === reversed
}
console.log(palindromo('ana ama '));