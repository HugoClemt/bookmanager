import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-new-book-view',
  templateUrl: './new-book-view.component.html',
  styleUrls: ['./new-book-view.component.css']
})
export class NewBookViewComponent implements OnInit {

  book!: Book;

  constructor(private bookService: BookService, private router: Router) {

  }

  ngOnInit(): void {
    this.book = new Book('','','','Libre');
  }

  onSubmitNewBook() {

    console.log(this.book)
    this.bookService.addBook(this.book);
    this.router.navigate(['books']);

  }


}
