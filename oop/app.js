// book class 
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
// ui class: handles ui tasks
class UI{
    static displayBooks(){
        const books = Store.getBooks();
        books.forEach((book)=>UI.addBookToList(book));
    }
    static addBookToList(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
                            <td>${book.title}</td>
                            <td>${book.author}</td>
                            <td>${book.isbn}</td>
                            <td><a href="#" class="btn btn-danger btn-sm delete">Delete Book</a></td>
        `
        list.appendChild(row);
    }
    static showAlert(message,className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);
        // vanish in 3 sec
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);

    }
    static clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
}
// store class : handle storage
class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }
    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach((book,index)=>{
            if(book.isbn === isbn){
                books.splice(index,1);
            }
        });
        localStorage.setItem('books',JSON.stringify(books));
    }
}
// Event: display book
document.addEventListener('DOMContentLoaded',UI.displayBooks);
// EVent: add book
document.querySelector('#book-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    // Get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // validate 
    if(title === '' || author === '' || isbn === ''){
        UI.showAlert('Please fill in all fields','danger');
    } else {

        // instatiate book
        const book = new Book(title,author,isbn);

        // add book to UI
        UI.addBookToList(book);
        UI.showAlert('Book added to the list','success');
        // add book to Store 
        Store.addBook(book);
        // Clear fields 
        UI.clearFields();

    }
})
// Event : remove book
document.querySelector('#book-list').addEventListener('click',(e)=>{
    // Remove book from UI 
    UI.deleteBook(e.target);
    // remove book from Store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    UI.showAlert('Book removed from the list','success')
})