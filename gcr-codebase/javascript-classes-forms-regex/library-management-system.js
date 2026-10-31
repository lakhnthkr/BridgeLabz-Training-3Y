class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(this.title + " is already issued.");
        } else {
            this.isIssued = true;
            console.log(this.title + " has been issued.");
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(this.title + " has been returned.");
        } else {
            console.log(this.title + " was not issued.");
        }
    }
}

const books = [
    new Book("Java Programming", "James Gosling", "101"),
    new Book("Python Basics", "Guido van Rossum", "102"),
    new Book("Web Development", "John Smith", "103")
];

console.log("Available Books:");

books.filter(book => !book.isIssued).forEach(book => {
    console.log(book.title + " - " + book.author);
});

const searchISBN = "102";
const selectedBook = books.find(book => book.ISBN === searchISBN);

if (selectedBook) {
    selectedBook.issueBook();
} else {
    console.log("Book not found.");
}

console.log("Available Books After Issue:");

books.filter(book => !book.isIssued).forEach(book => {
    console.log(book.title);
});

if (selectedBook) {
    selectedBook.returnBook();
}