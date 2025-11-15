import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/posts';
  private httpClient=inject(HttpClient);

  getPosts(page: number, limit: number) {
    return this.httpClient.get<any[]>(`${this.API_URL}?_page=${page}&_limit=${limit}`);
  }
}

