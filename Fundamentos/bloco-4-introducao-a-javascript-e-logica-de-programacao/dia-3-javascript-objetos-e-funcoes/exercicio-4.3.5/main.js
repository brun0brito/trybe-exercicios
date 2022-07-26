let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'sim';

let info2 = {
  personagem: 'Tio patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota:  'O último MacPatinhas',
  recorrente: 'sim'
};

for (const key in info) {
  if (key === 'personagem') {
    console.log(info[key], 'e', info2[key] )
  }
  if (key === 'origem'){
    console.log(info[key], 'e', info2[key]);
  }
  if (key === 'nota'){
    console.log(info[key], 'e', info2[key])
  }
  if (key === 'recorrente'){
    if (info.recorrente === 'sim' && info2.recorrente === 'sim'){
      console.log('Ambas recorrentes')
    }
    else {
      console.log ('não são recorrentes')
    }
  }
  
}
