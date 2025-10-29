import { Component } from '@angular/core';
import { PaperRockScissorsComponent } from "./paper-rock-scissors/paper-rock-scissors.component";

@Component({
  selector: 'app-root',
  imports: [PaperRockScissorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'paper-rock-scissors';
}
