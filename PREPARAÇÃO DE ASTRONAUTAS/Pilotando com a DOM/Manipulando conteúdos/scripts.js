// Manipulando conteúdos
//textContent


const element = document.querySelector('h1')

element.textContent = "Olá Devs"

//innertext

/* vai trocar o texto interno do elemento */

const element = document.querySelector('h1')

element.textContent = "Olá Devs"

//innerHTML

const element = document.querySelector('h1')

element.innerHTML= "Olá Devs <small>!!!</small>"



//value

const element = document.querySelector('input')

element.value = "outro valor"

//Manipuladno elementos
// atributos

const header = document.querySelector('header')
header.setAttribute('id','header')

const headerID = documento.querySelector('#header')

console.log(headerID)