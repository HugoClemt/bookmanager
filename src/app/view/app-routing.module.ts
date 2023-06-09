import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksViewComponent } from './books-view/books-view.component';
import { ErrorViewComponent } from './error-view/error-view.component';
import { BookViewComponent } from './book-view/book-view.component';
import { AuthViewComponent } from './auth-view/auth-view.component';
import { AuthGuardService } from '../services/guards/auth/auth-guard.service';
import { NewBookViewComponent } from './new-book-view/new-book-view.component';
import { EditBookViewComponent } from './edit-book-view/edit-book-view.component';
import { ProfilViewComponent } from './profil-view/profil-view.component';

const routes: Routes = [

  { path: 'auth', component: AuthViewComponent},
  { path: '', canActivate:[AuthGuardService], component: BooksViewComponent},
  { path: 'books', canActivate:[AuthGuardService], component: BooksViewComponent},
  { path: 'book/new', canActivate:[AuthGuardService], component: NewBookViewComponent},
  { path: 'book/edit/:id', canActivate:[AuthGuardService], component: EditBookViewComponent},
  { path: 'book/:id', canActivate:[AuthGuardService], component: BookViewComponent},
  { path: 'profil/:id', canActivate:[AuthGuardService], component: ProfilViewComponent},
  { path: 'not-found', component: ErrorViewComponent},
  { path: '**', redirectTo: 'not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
