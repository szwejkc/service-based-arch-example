import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsState {
  private notificationsSubject = new BehaviorSubject<string[]>([]);
  public notifications$ = this.notificationsSubject.asObservable();
  setNotification(notification: string): void {
    this.notificationsSubject.next([...this.notificationsSubject.getValue(), notification]);
  }
}
