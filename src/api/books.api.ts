import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Book} from './book';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksApi {
  private fetchUrl = '/api/call/books/fetch';
  public fetchBooks(): Observable<Array<Book>> {
    return of([
      { id: 'id1', name: 'name1' } as Book,
      { id: 'id2', name: 'name2' } as Book
    ]).pipe(delay(1000));
  }
}
