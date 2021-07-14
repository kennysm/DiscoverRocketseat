/* ### Sistema de gastos familiar


Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

    *receitas: []
    *despesas: []

Agora, crie uma função que irá calcular o total de  receitas e despesas
e irá mostrar uma mensagem se a familia está com saldo positivo
ou negativo, seguido do valor do saldo.

*/

let family = {
    incomes: [2500, 300, 2500, 4000, 250, 360.90],
    expenses:[ 320.50, 300.25, 150.50, 1980, 2000]
}

function sum(array) {
    let total = 0
    
    for(let value of array) {
        total += value
    }

return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
   
    const total = calculateIncomes - calculateExpenses
    
    const perfect = total >=0
    
    let balanceText = "negativo"
    if (perfect) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}:${total.toFixed(2)}`)
}

calculateBalance()