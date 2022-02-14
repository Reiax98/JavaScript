var sentence = "time for nap"

function makeMoreExciting(string) {
  return string + '!!!!'
}

function gritalo(string) {
  string = string.toUpperCase(string)
  return makeMoreExciting(string)
}

console.log(gritalo(sentence))