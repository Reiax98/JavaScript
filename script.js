var sentence = "time for nap"

function makeMoreExciting(string) {
  return string + '!!!!'
}

function gritalo(string) {
  string = string.toUpperCase(string)
  return makeMoreExciting(string)
}

console.log(gritalo(sentence))

var listacompra = ["banana", "fresa", "granada"]

var path_meat = ["Pollo", "ternera", "hamburgesa"]
var path_dairy = ["Yogurt", "Leche", "Queso"]
var path = { seccionA: "Está en la Sección A", seccionB: "Está en la Sección B"}

var tercerGato = { nombre: "garfield", apellido: "gato", direccion: "Casa de John Bonachón" }

console.log(path_meat, path.seccionA)
console.log(path_dairy, path.seccionB)
