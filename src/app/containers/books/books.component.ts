import {Component, Input} from '@angular/core';
import {Book} from '../../../api/book';

@Component({
  selector: 'app-books-component',
  templateUrl: './books.component.html'
})
export class BooksComponent {
  @Input()
  books: Book[];
}
