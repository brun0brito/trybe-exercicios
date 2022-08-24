const techProducts = [
  {
    id: 1, // numérico
    name: 'computer', // string
    price: 2100, // number
  },
  {
    id: 2,
    name: 'mouse',
    price: 56,
  },
  {
    id: 3,
    name: 'monitor',
    price: 589,
  },
  {
    id: 4,
    name: 'keyboard',
    price: 78,
  },
  {
    id: 5,
    name: 'HD',
    price: 350,
  },
  {
    id: 6,
    name: 'webcam',
    price: 187,
  },
  {
    id: 7,
    name: 'mic',
    price: 69,
  },
  {
    id: 8,
    name: 'headset',
    price: 216,
  },
];

// 3 - Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
// 4 - Crie um algoritmo que dado um preço retorne todos os produtos com preços iguais

// const preçoTotal = (id, quant) => {

//   return techProducts.find((element)=> element.id === id).price * quant;
// }
// console.log(preçoTotal(7, 2));

const precoIgual = (price) => techProducts.filter((element) => element.price === price);

console.log(precoIgual(216))

