import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

const API_URL = 'https://jsonplaceholder.typicode.com/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {
constructor(private http: HttpClient) {}

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_URL).pipe(
      catchError(this.handleError)
    );
  }

  findUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${API_URL}/${userId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('HTTP Error:', error);
    return throwError(() => new Error('Something went wrong'));
  }
}
