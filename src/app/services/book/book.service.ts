import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Array<Book>;

  constructor() {

    this.books = [];
    for(let i = 1; i <= 10; i++){
      this.books.push(
        new Book('Livre '+ i, 'Auteur '+ i, 'Lorem Ipsum', 'Libre')
        );
    }
  }

  switchAllBooksStatus( newStatus :string){
    for(const book of this.books) {
      book.status = newStatus;
    }
  }

  switchBookStatus(bookId: number,  newStatus :string){
    for(const book of this.books) {
      if(book.id === bookId ){
        book.status = newStatus;
        break;
      }
    }
  }

  getElementById(bookId: number){
    for(const book of this.books) {
      if(book.id === bookId ){
        return book;
      }
    }
    return null;
  }

  addBook(newBook: Book){
    this.books.push(newBook);
  }

  updateBook(editedBook: Book){
    for(let i = 0; i < this.books.length - 1; i++) {
      if(this.books[i].id === editedBook.id ){
        this.books[i] = editedBook;
        break;
      }
    }
  }

}
