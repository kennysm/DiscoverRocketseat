/*  

    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo

*/

console.log(Number('9') + 5)

// Manipulando Strings e Números

// Transformar String em Número e Número em String

let string = "123"
console.log(Number(string))
let number = 321
console.log(Number(number))


// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number1 = 4213123123.123123
console.log(number1.toFixed(2).replace(".", ","))

// Transforme letras minúsculas em maiúsculas.

let word = "Programar é muito bacana!"
console.log(word.toUpperCase())

//Separe um texto que contem espaços, em um novo array onde cada text é uma posição do array.

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// Verificar se o texto contém a palavra Amor

let phrase1 = " Eu quero viver!"
console.log(phrase1.includes("Amor"))

// transformar uma cadeia de caracteres em elementos de um array

let word3 = "manipulação"
console.log(Array.from(word3))


let techs = ["html", "css", "js"]
// Adicionar um item no fim
console.log(techs.push("nodejs"))
// adicionar no começo
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
// remover 1 ou mais items em qualquer posição do array
techs.splice(1, 2)
// encontrar a posição de um elemento no array
let index = techs.indexOf('html')
techs.splice(index, 1)
console.log(techs)

