import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-edit-book-view',
  templateUrl: './edit-book-view.component.html',
  styleUrls: ['./edit-book-view.component.css']
})
export class EditBookViewComponent implements OnInit{

  book: any;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) {

  }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.book = this.bookService.getElementById(+id);
  }

  onSubmitEditBook() {
    this.bookService.updateBook(this.book);
    this.router.navigate(['books']);
  }

}
