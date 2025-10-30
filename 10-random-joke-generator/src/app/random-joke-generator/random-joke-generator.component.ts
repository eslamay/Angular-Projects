import { Component, inject, OnInit } from '@angular/core';
import { JokeService } from '../services/joke.service';
import { Joke } from '../models/joke';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-random-joke-generator',
  imports: [CommonModule],
  templateUrl: './random-joke-generator.component.html',
  styleUrl: './random-joke-generator.component.scss'
})
export class RandomJokeGeneratorComponent  {
  private jokeService= inject(JokeService);
  joke:Joke | null= null;

  getRandomJoke() {
    this.jokeService.getRandomJoke().subscribe({
      next: (joke) => {
        this.joke = joke;
      },
      error: (error) => {
        console.error('Error fetching joke:', error);
      }
    });
  }

}
