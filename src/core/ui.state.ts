import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiState {
  private loadingSubject = new BehaviorSubject(false);
  public loading$ = this.loadingSubject.asObservable();
  public get loading() { return this.loadingSubject.getValue(); }
  setLoader(loading: boolean) {
    this.loadingSubject.next(loading);
  }
}
