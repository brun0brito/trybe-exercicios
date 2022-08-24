const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc , str) => {
   return acc + str.split('').reduce((acumulator, curr) => {
      if (curr === 'a' || curr === 'A') return acumulator +1;
      return acumulator;
    },0);
  },0)
}
console.log(containsA());