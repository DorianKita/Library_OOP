class Book{
    #title;
    #author;
    #publishYear;

    constructor(title,author = 'none' ,publishYear = 'none'){
        this.#author = author;
        this.#title = title;
        this.#publishYear = publishYear;
    }

    showBook(){
        return (`Title: ${this.#title} , Author: ${this.#author}, Release date: ${this.#publishYear} `);
    }
}



class Library{
    #bookCollection;

    constructor(){
        this.#bookCollection = new Map();
        this.init();
    }

    init(){
        document.getElementById('add-book').addEventListener('click', () => this.#addBook());
        document.getElementById('search-book').addEventListener('click', () => this.#searchBook());
    }

    #addBook(){
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const date = document.getElementById('date').value;

        const book = new Book(title,author,date);
        this.#bookCollection.set(title, book);

        alert('Book has been added to library collection');
        console.log(this.#bookCollection);
    }

    #searchBook(){
        const title = document.getElementById('search-title').value;
        const book = this.#bookCollection.get(title);
        const displayBook = document.getElementById('search-result');

        if(book){
            // displayBook.textContent = book.showBook();
            console.log(book);
        } else {
            displayBook.textContent = 'this book does not exist in library';
        }
    }
}
const library = new Library();

// const book = new Book('Mira', 'Herkules', '2022');
// console.log(book);
// book.showBook();