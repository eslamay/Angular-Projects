import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [RouterLink,CommonModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements AfterViewInit {
  showContent: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showContent = true;
    }, 10);
  }
}
