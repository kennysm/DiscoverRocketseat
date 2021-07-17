// Criando e adicionando elementos

//createElement
const div = document.createElement('div');
div.innerTexts = "Olá Devs"
//append prepend
const body = document.querySelector('body')
body.append(div)

//insertBefore

const body = document.querySelector('body')
const header = document.querySelector('header')
body.insertBefore(div, header.nextSibling)