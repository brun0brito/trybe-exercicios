/* Escreva um programa que receba o nome de uma 
peça de xadrez e retorne os movimentos que ela faz. */

let xadrez = "peao";
xadrez.value = xadrez.value.toUpperCase()

switch (xadrez){
  case 'peao':
    console.log("Move para Frente uma casa por vez, exeto se é a primeira vez que ele é movido")
    break;
  
  case 'bispo':
    console.log("Se move em linha reta diagonalmente no tabuleiro");
    break;

  case 'torre':
    console.log("move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas");
    break;

  case 'cavalo':
    console.log("O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto, formando um L");
    break;

  case 'rainha':
    console.log("Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente");
    break;

  case 'rei':
    console.log("O rei pode se mover para qualquer casa adjacente");
    break;

  default:
    console.log("bishop (bispo) -> diagonals (diagonais)");
}