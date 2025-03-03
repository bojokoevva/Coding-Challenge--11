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
