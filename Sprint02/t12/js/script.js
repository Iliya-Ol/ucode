let triangle = "";
let star = prompt("Size of the triangle: ")

for(let i = 0; i <= star; i++) {
  for(let k = 0; k < i; k++) {
    triangle += "*";
  }
  triangle += "\n"
}

alert(triangle);