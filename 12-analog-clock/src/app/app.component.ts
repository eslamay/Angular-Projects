import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import * as cc from './clock.constants';
import { TimeService } from './services/time.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  hours:number =0;
  minutes:number=0;
  seconds:number=0;
  clockNumbers= this.generateClockNumbers();

  generateClockNumbers(){
    const numbers = [];
    const centerOffset=cc.CLOCK_CONSTANTS.CENTER_OFFSET;
    const radius=cc.CLOCK_CONSTANTS.RADIUS;

    for(let hour=1; hour<=12; hour++){
      const angleInDegrees = hour * cc.CLOCK_CONSTANTS.DEGREES_PER_HOUR - 90;
      const angleInRadians = angleInDegrees * cc.CLOCK_CONSTANTS.DEG_TO_RAD;
      const x = centerOffset + radius * Math.cos(angleInRadians);
      const y = centerOffset + radius * Math.sin(angleInRadians);
      numbers.push({hour, x, y});
    }
    return numbers;
  }

  private timeService=inject(TimeService);
  ngOnInit(): void {
    this.updateTime();
    setInterval(()=>{
      this.updateTime();
    },1000);
  }

  updateTime(){
    const currentTime = this.timeService.getCurrentTime();
    this.hours = currentTime.hours;
    this.minutes = currentTime.minutes;
    this.seconds = currentTime.seconds;
  }
}
