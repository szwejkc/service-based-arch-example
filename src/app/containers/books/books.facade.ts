import {Injectable} from '@angular/core';
import {BooksState} from './books.state';
import {UiState} from '../../../core/ui.state';
import {BooksApi} from '../../../api/books.api';
import {NotificationsState} from '../../../core/notifications.state';

@Injectable()
export class BooksFacade {

  constructor(private booksApi: BooksApi,
              private booksState: BooksState,
              private uiState: UiState,
              private notificationsState: NotificationsState) {}

  fetchBooks(): void {
    this.booksApi.fetchBooks().subscribe(
      data => {
        this.booksState.setBooks(data);
        this.uiState.setLoader(false);
      },
      error => {
        this.uiState.setLoader(false);
        this.notificationsState.setNotification(error);
      }
    );
    this.uiState.setLoader(true);
  }
}
