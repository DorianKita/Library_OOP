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
        console.log(`Title: ${this.#title} , Author: ${this.#author}, Release date: ${this.#publishYear} `);
    }
}



class Library{
    #bookCollection;

    constructor(){
        this.#bookCollection = new Map();
        this.init();
    }

    init(){
        document.getElementById('add-book').addEventListener('click', () => this.addBook());
    }

    addBook(){
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const date = document.getElementById('date').value;

        const book = new Book(title,author,date);
        this.#bookCollection.set(title, book);

        alert('Book has been added to library collection');
        console.log(this.#bookCollection);
    }
}
const library = new Library();

// const book = new Book('Mira', 'Herkules', '2022');
// console.log(book);
// book.showBook();