import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Joke } from '../models/joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private httpClient= inject(HttpClient);
  private apiUrl = 'https://official-joke-api.appspot.com/jokes/random';

   getRandomJoke() {
    return this.httpClient.get<Joke>(this.apiUrl);
  }
}
