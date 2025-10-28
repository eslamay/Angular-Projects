import { Component } from '@angular/core';
import { GuessTheNumberComponent } from "./guess-the-number/guess-the-number.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [GuessTheNumberComponent]
})
export class AppComponent {
  title = 'guess-the-number';
}
