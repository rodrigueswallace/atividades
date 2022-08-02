const saldo = 150

const lista = [
  {
   valor: 15,
    name: 'feijão',

  },
  {
     valor: 20,
    name: 'arroz',
  },{
     valor: 50,
    name: 'caixa de leite',
   
  },{
     valor: 15,
    name: 'café',
   
  },{
      valor: 10,
    name: 'açucar',
  
  },{
    valor: 20,
    name: '1kg de peito de frango',
    
  },{
    valor: 15,
    name: '1 caixa de ovos',
    
  },
]


function calculaSoma(saldo,items) {
  return items.reduce((saldo,item) => saldo - item.valor, saldo)
}


console.log(calculaSoma(saldo,lista))