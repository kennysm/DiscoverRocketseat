// Eventos

function print() {
  console.log('print')
}

const h1 = document.querySelector("h1");
h1.addEventListener('', print)

function print() {
  console.log('print')
}

// argumento event

const input = document.querySelector('input')

input.onkeydown = function (event) {
  console.log(event.currentTarget.value)
}