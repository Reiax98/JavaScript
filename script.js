var sentence = "time for nap"

//Funciones

function makeMoreExciting(string) {
  return string + '!!!!'
}

function gritalo(string) {
  string = string.toUpperCase(string)
  return makeMoreExciting(string)
}

console.log(gritalo(sentence))

//Lista

var listacompra = ["banana", "fresa", "granada"]

//Objetos

var path_meat = ["Pollo", "ternera", "hamburgesa"]
var path_dairy = ["Yogurt", "Leche", "Queso"]
var path = { seccionA: "Está en la Sección A", seccionB: "Está en la Sección B"}

console.log(path_meat, path.seccionA)
console.log(path_dairy, path.seccionB)

var job = [
  {
    fecha: "20/02/2022",
    inicio: "Recibimos nuestros roles"
  },
  {
    fecha: "21/03/2022",
    entrega: "La documentación de kanban"
  }
]

console.log(job)
