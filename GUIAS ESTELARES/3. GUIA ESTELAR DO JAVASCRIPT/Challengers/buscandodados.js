/*


Buscando e contado dados em Arrays

Baseado no Array de Livros por categoria abaixo, faça os seguintes 
desafios.

    * Contar o número de categorias e o número de livros em cada
    categoria
    * Contar o número de autores
    * Mostrar  livros do autor Augusto Cury
    * transformar a função acima em uma função que irá receber o
    nome do autor e devolver os livros desse autor.
*/

const booksbyCategory = [
    {
       category:"Riqueza",
       books: [
           {
               title: "Os segredos da mente milionária",
               author:"T. Harv Eker",
           },
           {
                title: "O homem mais rico da Babilônia",
                author:"george S. Clason",
            },

            {
                title: "Pai rico, pai pobre",
                author:"Robert T. kyosaki e Sharon L. Lechter",
            },


       ],
        
    },
    {
        category:"Inteligência Emocional",
        books: [ 
            {
                title: "Você é Insubstituível",
                author:"Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author:"Augusto Cury",
            },
            {
                title: "Os 8 hábitos das pessoas altamente eficazes",
                author:"Augusto Cury",
            },
        ],
    },
];

const totalCategories = booksbyCategory.length

console.log(totalCategories);
for(let category of booksbyCategory){
    console.log('Total de livros da categoria',category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];

    for(let category of booksbyCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.ahtor)
            }
        }
    }
    console.log("Total de autores", authors.length)
}

countAuthors();

function booksOfAuthor(author){
    let books = [];

    for(let category of booksbyCategory){
        for(let book of category.books){
            if(book.author === author) {
                books.push(book.title)
            }
          }
        }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury')
