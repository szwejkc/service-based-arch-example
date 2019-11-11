import {NgModule} from '@angular/core';
import {BooksContainer} from './books.container';
import {BooksComponent} from './books.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BooksFacade} from './books.facade';
import {BooksState} from './books.state';

@NgModule({
  declarations: [
    BooksContainer,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    BooksContainer
  ],
  providers: [
    BooksFacade,
    BooksState
  ]
})
export class BooksModule {}
