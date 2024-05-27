var checkRook = false
var checkBishop = false
var dimensions = 3

var x = []
var w = []
var b = []

for (let i = 0; i < dimensions; i++) {
  x.push(0)
  w.push(Math.floor(Math.random()*8))
  b.push(Math.floor(Math.random()*8))
}

while (b == w) {
  b = []
  for (let i = 0; i < dimensions; i++) {
    b.push(Math.floor(Math.random()*8))
  }
}

console.table(w)
console.table(b)

for (let i = 0; i < dimensions; i++) {
  if (w[i] == b[i]) {checkRook = true}
}
console.log(checkRook)

for (let i = 0; i < dimensions; i++) {
  x[i] = Math.abs(w[i]-b[i])
}

for (let i = 0; i <= x.length; i++) {
  for (let j = i+1; j <= x.length - i; j++) {
    if (x[i] == x[j]) {checkBishop = true}
  }
}

console.table(x)
//if (x[0] == x[1]) {checkBishop = true}
console.log(checkBishop)

if (checkBishop || checkRook) {
  console.log("They can see each other")  
} else {
  console.log("They can't see each other")}
