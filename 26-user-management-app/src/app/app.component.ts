import { Component } from '@angular/core';
import { UserformComponent } from "./components/userform/userform.component";
import { UsersComponent } from "./components/users/users.component";

@Component({
  selector: 'app-root',
  imports: [UserformComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
