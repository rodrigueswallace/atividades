const dividas = [100, 50, 300, 500]
const porcentagemJuros = {
  juros: 20
};

function somaDivida(array, multiplicador) {
  return array.map(function (item) {
    return item * this.juros
  }, multiplicador)
}
console.log(somaDivida(dividas, porcentagemJuros))
