import {Component, OnInit} from '@angular/core';
import {BooksState} from './books.state';
import {BooksFacade} from './books.facade';

@Component({
  selector: 'app-books',
  template: `<app-books-component *ngIf="books$ | async" [books]="books$ | async"></app-books-component>`
})
export class BooksContainer implements OnInit {

  books$ = this.booksState.books$;

  constructor(
    private booksFacade: BooksFacade,
    private booksState: BooksState) {}

  ngOnInit() {
    this.booksFacade.fetchBooks();
  }

}
