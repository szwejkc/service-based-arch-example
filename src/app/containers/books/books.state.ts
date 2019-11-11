import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Book} from '../../../api/book';

@Injectable()
export class BooksState {
  private booksSubject = new BehaviorSubject<Array<Book>>([]);
  public books$ = this.booksSubject.asObservable();
  setBooks(books: Array<Book>) {
    this.booksSubject.next(books);
  }
}
