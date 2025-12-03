import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  feedBack = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  onSubmit(form: any) {
      if (!form.valid) {
        return;
      }
      console.log(this.feedBack);
      this.submitted = true;
  }
}
