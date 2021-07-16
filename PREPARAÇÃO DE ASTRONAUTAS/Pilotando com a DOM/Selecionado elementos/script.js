 //getElementById()

const element = document.getElementById('blog-title')
console.log(element)



//getElementsbyClassName()

const element1 = document.getElementsByClassName('one')
console.log(element1)



//getElementsByTagName()

const element2= document.getElementsByTagName('body')
console.log(element2)



//querySelector()


const element3 = document.querySelector('meta')
console.log(element3)

//querySelectorALL{}

const element4 = document.querySelectorAll('.one')

element4.forEach(el => console.log(el))



//Qual usar?

//getElementById (element)
//getElementsbyClassName (HTMLCollection)
//getElementsByTagName (HTMLCollection)
//querySelector (element)
//querySelectorAll (Nodelist)