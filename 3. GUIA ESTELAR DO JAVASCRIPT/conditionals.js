//if....else

let temperature = 38


if(temperature >= 37.5) {
    console.log('Febre alta')

} else if (temperature <37.5 && temperature >=37){
    console.log('febre moderada')
} else {
    console.log('saudável')
}

/* Another way

-----------------------DECLARATION-----------------------

let temperature = 37
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature <= 37.5 && temperature >= 37

----------------------------------------------------------
if(temperature >= 37.5) {
    console.log('Febre alta')

} else if (mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

*/ 

// switch

let expression = 'a'
switch (expression) {
    case 'a':
        // code expression a
        console.log('a')
        break
    case 'b':
        //code  expression b
        console.log('b')
        break
    default:
        console.log('default')
        break
}

function calculate(number1, operator, number2) {
    let result = 0;
    

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*': 
        result = number1 * number2
            break
        case '/':
            result = number1 / number2      
            break
        default:
            console.log('não implementado')
            break
          
}

    return result
}

console.log(calculate(4, '+', 12))

//throw

function sayMyName (name = '') {
    if (name === ''){
        throw new Error("nome é obrigatório")
    }

    console.log('depois do erro')
}
//try...catch

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

//Estrutura de repetição
//for

//break - stop de execution
for(let i = 10; i >0; i--) {
    if(i ===5) {
        break;
    }
    console.log(i)
}

//continue - Jump the execution at the momment
for(let i = 10; i >0; i--) {
    if(i ===5) {
        continue;
    }
    console.log(i)
}

//while

let is = 421323123;
while(is > 10) {
    console.log(is)

    is /= 35
}

//for...of

let name1 = 'Kennedy'
let names = ['João', 'Paulo', 'thaylan']

for(let char of name1) {
    console.log(char)
}

//for...in

let person1 = {
    name: 'Goidinho',
    age:23,
    weight: 900
}
for (let property in person1) {
    console.log(property)
    console.log(person1[property])
}