import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-paper-rock-scissors',
  imports: [CommonModule],
  templateUrl: './paper-rock-scissors.component.html',
  styleUrl: './paper-rock-scissors.component.scss'
})
export class PaperRockScissorsComponent {
choice = ['paper', 'rock', 'scissors'];
userChoice: string = '';
computerChoice: string = '';
result: string = '';

play(userChoice: string) {
  this.userChoice = userChoice;
  this.computerChoice = this.choice[Math.floor(Math.random() * 3)];
  if (this.userChoice === this.computerChoice) {
    this.result = 'draw';
  } else if (
    (this.userChoice === 'paper' && this.computerChoice === 'rock') ||
    (this.userChoice === 'rock' && this.computerChoice === 'scissors') ||
    (this.userChoice === 'scissors' && this.computerChoice === 'paper')
  ) {
    this.result = 'win';
  } else {
    this.result = 'lose';
  }
}

reset() {
  this.userChoice = '';
  this.computerChoice = '';
  this.result = '';
}
}
