import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  imports: [CommonModule],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.scss'
})
export class StopwatchComponent {
  elapsedTime: number = 0;
  isRunning: boolean = false;
  intervalRef: any;

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalRef = setInterval(() => {
        this.elapsedTime += 1;
      }, 1000);
    }
  }

  stop() {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.intervalRef);
    }
  }

  reset() {
    this.stop();
    this.elapsedTime = 0;
  }
}
