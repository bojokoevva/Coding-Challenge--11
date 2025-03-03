// Task 1 - Create Book Class
class Book {
    constructor(title, author, isbn, copies) { // Initialize book properties
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    
    getDetails() { // Return formatted book details
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
    
    updateCopies(quantity) { // Update the number of available copies
        this.copies += quantity;
    }
}

// Test Case 1
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5); // Create a new book instance
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1); // Reduce the number of copies by 1
console.log(book1.getDetails());
// Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"


// Task 2 - Create Borrower Class
class Borrower {
    constructor(name, borrowerId) { // Initialize borrower properties
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = []; // Track borrowed books
    }
    
    borrowBook(book) { // Add a book to the borrower's list
        this.borrowedBooks.push(book);
    }
    
    returnBook(book) { // Remove a returned book from the borrower's list
        let index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
        } else {
            console.log(`The book "${book.title}" was not checked out by this borrower.`);
        }
    }
}

// Test Case 2
const borrower1 = new Borrower("Alice Johnson", 201); // Create a new borrower instance
borrower1.borrowBook("The Great Gatsby"); // Borrow a book
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby"); // Return the book
console.log(borrower1.borrowedBooks);
// Expected output: []