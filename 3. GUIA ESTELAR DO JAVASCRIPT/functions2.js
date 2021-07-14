//function expression
//function anonymous
//parameters
const sum = function (number1, number2) {
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25


console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

// função é um liquidificador 

function fazersuco(fruta1, fruta2) {
    return fruta1 + fruta2
}
const copo = fazersuco('banana', 'maça')
console.log(copo)

// function hoisting

sayMyName()

function sayMyName() {
    console.log('Kennedy')
}


/* function() constructor

    * new expression
    * create a new object
    * this keyword
    *
    */

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}
const kennedy = new Person("Kennedy")
const joao = new Person ("joao")
console.log(kennedy.walk())
console.log(joao.walk())


/*

    Prototype 

    * prototype-based language
    * prototype chain
    * __proto__
    
*/



