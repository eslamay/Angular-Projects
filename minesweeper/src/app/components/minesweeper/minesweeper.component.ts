import { Component } from '@angular/core';
import { TimerComponent } from "../timer/timer.component";

@Component({
  selector: 'app-minesweeper',
  imports: [TimerComponent],
  templateUrl: './minesweeper.component.html',
  styleUrl: './minesweeper.component.scss'
})
export class MinesweeperComponent {

}
