import { Component } from '@angular/core';
import {UiState} from '../core/ui.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'service-based-arch-example';
  loading$ = this.uiState.loading$;
  constructor(private uiState: UiState) {}
}
