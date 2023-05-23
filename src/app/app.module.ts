import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './view/app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './services/book/book.service';
import { TableRowComponent } from './components/table-row/table-row.component';
import { BooksViewComponent } from './view/books-view/books-view.component';
import { ErrorViewComponent } from './view/error-view/error-view.component';
import { BookViewComponent } from './view/book-view/book-view.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthViewComponent } from './view/auth-view/auth-view.component';
import { AuthService } from './services/auth/auth.service';
import { NewBookViewComponent } from './view/new-book-view/new-book-view.component';
import { EditBookViewComponent } from './view/edit-book-view/edit-book-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilViewComponent } from './view/profil-view/profil-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TableRowComponent,
    BooksViewComponent,
    ErrorViewComponent,
    BookViewComponent,
    HeaderComponent,
    AuthViewComponent,
    NewBookViewComponent,
    EditBookViewComponent,
    ProfilViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
