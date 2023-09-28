class Book{
    #title;
    #author;
    #publishYear;

    constructor(title,author,publishYear){
        this.#author = author;
        this.#title = title;
        this.#publishYear = publishYear;
    }

    showBook(){
        console.log(`tytuł: ${this.#title} , Autor: ${this.#author}, Data wydania: ${this.#publishYear} `);
    }
}

class Library{}