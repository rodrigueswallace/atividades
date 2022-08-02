const lista = [
  242,854,765,324,754,885,345,333,665,555,888,234,123,753,765,33,111,649,235,908,444,435,753,876,4245,654,2222
]

function filtrarPares(array) {
  return array.filter((item) => item % 2 === 0)
}
console.log(filtrarPares(lista))