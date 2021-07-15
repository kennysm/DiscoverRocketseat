/* Expressions and Operators

    Binary
    Unary
    Ternary

*/

let number = 1
console.log(number + 1)

/*
    new

        *left-hand-side expression
        *Create a new object
*/

let name = new String('Kennedy')
name.surName = "Mota"
let age = new Number(23)
console.log(name, age)

/*  Unary operators
    Typeof
    delete
*/

const person = {
    name: 'kennedy',
    age: 25,
}
delete person.age
console.log(person)

// Operadores aritiméticos

//multiplicação
console.log(3.2 * 5.)
//divisão
console.log( 27 / 2)
//soma
console.log(34 + 67)
//subtração
console.log(35 - 12)
//resto da divisão
let remainder
remainder = 11 % 3
console.log(remainder)
//incremento
let increment = 0
increment++
console.log(increment)
//decremento
let decrement = 2
decrement--
console.log(decrement)
//exponencial
console.log(3 ** 3)

//Grouping operator ( )

let total = (2 + 3) * 5
console.log(total)

// Logical operators

// - 2 valores booleanos, quando verificados
// result = true or false

let pao = true
let queijo = true

// AND &&
console.log( pao && queijo)

// NOT !
console.log(!pao)


//String Operator

//Comparison
console.log( 'a' == 'a')
//concatenation
let alpha = 'alpha'
console.log( alpha + 'bet')

