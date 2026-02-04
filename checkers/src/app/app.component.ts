import { Component } from '@angular/core';
import { CheckerComponent } from "./components/checker/checker.component";

@Component({
  selector: 'app-root',
  imports: [CheckerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'checkers';
}
