import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emoji } from '../models/emoji.model';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {
  private emojisUrl='emoji.json';
  private httpClient=inject(HttpClient);

  getEmojis():Observable<Emoji[]> {
    return this.httpClient.get<Emoji[]>(this.emojisUrl);
  }

  getCategories(emojis:Emoji[]):string[] {
    return [...new Set(emojis.map(emoji => emoji.category))];
  }
}
