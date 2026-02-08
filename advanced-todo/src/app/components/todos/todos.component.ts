import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, catchError, of } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {

  users: User[] = [];
  selectedUser?: User;
  selectedUserId: number | string = '';
  newTodoTitle = '';

  todos$!: Observable<Todo[]>;

  currentEditingTodoId: number | null = null;
  currentEditingTodoTitle = '';

  constructor(
    private userService: UserService,
    public todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.todos$;

    this.userService.fetchUsers()
      .pipe(
        catchError(error => {
          console.error('Failed to fetch users:', error);
          return of([]);
        })
      )
      .subscribe(users => {
        this.users = users;
      });
  }

  onUserSelect(): void {
    if (!this.selectedUserId) return;

    this.userService.findUserById(+this.selectedUserId).subscribe({
      next: user => {
        if (!user) return;

        this.selectedUser = user;
        this.todoService.fetchTodos(user.id);
      },
      error: err => console.error('Error fetching user:', err),
    });
  }

  addTodo(): void {
    if (!this.newTodoTitle.trim() || !this.selectedUser) {
      alert('Please select a user and enter a todo title');
      return;
    }

    this.todoService.addTodo({
      userId: this.selectedUser.id,
      title: this.newTodoTitle,
      completed: false,
    });

    this.newTodoTitle = '';
  }

  deleteTodo(todoId: number): void {
    this.todoService.deleteTodo(todoId);
  }

  openEditModal(todo: Todo): void {
    this.currentEditingTodoId = todo.id;
    this.currentEditingTodoTitle = todo.title;
  }

  saveChanges(): void {
    if (
      this.currentEditingTodoId &&
      this.currentEditingTodoTitle.trim()
    ) {
      this.todoService.editTodoById(this.currentEditingTodoId, {
        title: this.currentEditingTodoTitle,
      });

      this.currentEditingTodoId = null;
      this.currentEditingTodoTitle = '';
    }
  }
}
