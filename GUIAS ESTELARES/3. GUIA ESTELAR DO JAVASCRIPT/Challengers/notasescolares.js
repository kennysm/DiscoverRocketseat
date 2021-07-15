/* crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo ABC

* de 90 para cima - A
* entre 80 -  89  - B
* entre 70 -  79  - C
* entre 60 -  69  - D
* menor que 60    - F

*/


function getScore(score){
    let scoreA = score >= 90 && score <=100
    let scoreB = score >= 80 && score <=89
    let scoreC = score >= 70 && score <=79
    let scoreD = score >= 60 && score <=69
    let scoreE = score < 60 && score >= 0

    let scoretotal;

    if(scoreA) {
        scoretotal = "A" 
    } else if (scoreB) {
        scoretotal = "B"
    } else if (scoreC) {
        scoretotal = "C"
    } else if (scoreD) {
        scoretotal = "D"
    } else if (scoreE) {
        scoretotal = "E"
    } else {
        scoretotal = "Nota inválida"
    }      
    console.log(scoretotal)

}

getScore(100)
getScore(85)
getScore(75)
getScore(65)
getScore(50)
