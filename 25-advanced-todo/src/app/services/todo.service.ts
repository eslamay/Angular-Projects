import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { Todo } from '../models/todo.model';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private todosSubject = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchTodos(userId: number): void {
    this.http
      .get<Todo[]>(`${API_URL}?userId=${userId}`)
      .pipe(catchError(this.handleError))
      .subscribe((todos) => {
        this.todosSubject.next(todos);
      });
  }

  addTodo(newTodo: Partial<Todo>): void {
    const currentTodos = this.todosSubject.value;

    const newId =
      Math.max(...currentTodos.map((todo) => todo.id), 0) + 1;

    const todo = new Todo(
      newTodo.userId!,
      newId,
      newTodo.title ?? 'New Todo',
      false
    );

    this.todosSubject.next([...currentTodos, todo]);
  }

  deleteTodo(todoId: number): void {
    const updatedTodos = this.todosSubject.value.filter(
      (todo) => todo.id !== todoId
    );

    this.todosSubject.next(updatedTodos);
  }

  editTodoById(todoId: number, updatedTodo: Partial<Todo>): void {
    const updatedTodos = this.todosSubject.value.map((todo) =>
      todo.id === todoId ? { ...todo, ...updatedTodo } : todo
    );

    this.todosSubject.next(updatedTodos);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('HTTP Error:', error);
    return throwError(() => new Error('Something went wrong'));
  }
}

