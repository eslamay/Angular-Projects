import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-the-number',
  imports: [CommonModule,FormsModule],
  templateUrl: './guess-the-number.component.html',
  styleUrl: './guess-the-number.component.scss'
})
export class GuessTheNumberComponent {
secretNumber: number= this.generateRandomNumber();
attemptsLeft: number = 10;
guessedNumber?:number;
message: string = '';
gameOver: boolean = false;

private static readonly MAX_NUMBER = 100;
private static readonly MAX_ATTEMPTS = 10;

private generateRandomNumber(): number {
  const randomNumber = Math.floor(Math.random() * GuessTheNumberComponent.MAX_NUMBER) + 1;
  console.log(randomNumber);
  return randomNumber;
}

public isValidNumber(): boolean {
  return this.guessedNumber !== undefined && this.guessedNumber >= 1 && this.guessedNumber <= GuessTheNumberComponent.MAX_NUMBER;
}

private evaluateGuess(): string {
  return this.guessedNumber! < this.secretNumber ? 'Too low!' : 'Too high!';
}

public checkGuess(): void {
  if (this.gameOver || !this.isValidNumber()) {
    return;
  }

  if (this.guessedNumber === this.secretNumber) {
    this.message = `Congratulations! You've guessed the number ${this.secretNumber} correctly!` + this.evaluateGuess();
    this.gameOver = true;
  } else if (this.attemptsLeft > 1) {
    this.message = `Wrong guess. You have ${this.attemptsLeft - 1} attempts left.`;
    this.message += this.evaluateGuess();
    this.attemptsLeft--;
  } else {
    this.message = `Game over. The secret number was ${this.secretNumber}.`;
    this.gameOver = true;
  }

  this.guessedNumber = undefined;
}

public resetGame(): void {
  this.secretNumber = this.generateRandomNumber();
  this.attemptsLeft = GuessTheNumberComponent.MAX_ATTEMPTS;
  this.message = '';
  this.gameOver = false;
  this.guessedNumber = undefined;
}
}
